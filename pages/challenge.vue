<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <p>{{username}}</p>
        <p>Your challenge is:</p>
        <h2> {{challenge_txt}} </h2>
        <p>Time Remaining</p>
        <h2>{{time_remaining}}</h2>
      <v-btn
        class="ma-1"
        color="error"
        plain
        @click="proceed"
      >
        PASS THE BATON!
      </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import global from '~/assets/global';

export default {
  data: () => ({
      relay: global.relay,
      username: global.username,
      update: true
  }),
  components: {
    
  },
  mounted() {
    global.swing1fn = this.swing_event;
    this.continuous_update();
  },
  destroyed() {
      this.update = false;
  },
  computed: {
      challenge_txt() {
          let category = this.relay.category;
          let challenge = this.relay.status.challenge;
          let text = global.challenges[category][challenge]
          return text;
      },
      time_remaining() {
          let elapsed = this.relay.status.challenge_time - Date.now()/1000
          let remaining = this.relay.timer * 60 + elapsed
          remaining = Math.floor(remaining)
          let minutes = Math.floor(remaining/60)
          let seconds = remaining - minutes * 60
          let remaining_txt = minutes + " min " + seconds + " sec"
          return remaining_txt
      }
  },
  methods: {
    continuous_update: async function() {
        while(this.update) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            let response = await fetch(global.api_url + "/relay/" + global.relay.code)
            global.relay = await response.json();
            this.relay = global.relay;
        }
    },
    proceed: async function () {
        let response = await fetch(global.api_url + "/relay/" + global.relay.code + "/challenge",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "challenge_stage": "waiting"
                    })
                })
        let relay = await response.json();
        global.relay = relay;
        this.$router.push({
            path: '/success'
        })
    },
    swing_event: function() {
        this.proceed();
    }
  }
}
</script>
