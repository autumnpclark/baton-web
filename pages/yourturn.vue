<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <p>{{username}}</p>
        <h2>YOU'RE UP!</h2>

      <v-btn
        class="ma-1"
        color="error"
        plain
        @click="proceed"
      >
        TAKE THE BATON!
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
    global.swing0fn = this.swing_event;
  },
  methods: {
    proceed: async function () {
        let response = await fetch(global.api_url + "/relay/" + global.relay.code + "/challenge",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "challenge_stage": "active"
                    })
                })
        let relay = await response.json();
        global.relay = relay;
        this.$router.push({
            path: '/challenge'
        })
    },
    go_back: function () {
        this.$router.back();
    },
    swing_event: function() {
        this.proceed();
    }
  }
}
</script>
