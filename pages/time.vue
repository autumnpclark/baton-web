<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 class="primary--text">RELAY</h1>
        <p>Choose a difficulty level!</p>
        <v-btn block color="info" @click="proceed(-1)">
          Zen - No timer
        </v-btn>
        <v-btn block color="primary" id='mental' @click="proceed(30)">
          Chillin' - 30 minutes/challenge
        </v-btn>
        <v-btn block id='creative' @click="proceed(15)">
          Cruising - 15 minutes/challenge
        </v-btn>
        <v-btn block color="secondary" id='service' @click="proceed(5)">
          Blazing - 5 minutes/challenge
        </v-btn>
        <v-btn block color="accent" id='random' @click="proceed(2)">
          Screaming - 2 minutes/challenge
        </v-btn>
        <v-btn
        class="ma-1"
        color="secondary"
        @click="go_back"
      >
        Go Back
      </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import global from '~/assets/global';

export default {
  data: () => ({
      relay: global.relay
  }),
  components: {
    
  },
  methods: {
    proceed: async function (time) {
        console.log(time);
        global.relay.timer = time;
        let response = await fetch(global.api_url + "/relay/" + global.relay.code,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "category": global.relay.category,
                        "timer": global.relay.timer
                    })
                })
        global.relay = await response.json();
        this.$router.push({
            path: '/waiting'
        })
    },
    go_back: function () {
        this.$router.back();
    }
  }
}
</script>