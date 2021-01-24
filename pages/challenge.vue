<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <p>{{username}}</p>
        <p>Your challenge is:</p>
        <h2> {{challenge_txt}} </h2>

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
      username: global.username
  }),
  components: {
    
  },
  mounted() {
    global.swing1fn = this.swing_event;
  },
  computed: {
      challenge_txt() {
          let category = this.relay.category;
          let challenge = this.relay.status.challenge;
          let text = global.challenges[category][challenge]
          return text;
      }
  },
  methods: {
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
