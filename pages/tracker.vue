<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 class="primary--text">RELAY</h1>
        <ul id="players">
            <li v-for="user in redacted_list" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
        <p>Time Remaining</p>
        <h2 class="secondary--text">{{time_remaining}}</h2>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import global from '~/assets/global';

export default {
  data: () => ({
      relay: global.relay,
      update: true
  }),
  components: {
    
  },
  computed: {
      redacted_list() {
          let print_names = []
          for (let i = 0; i < this.relay.challenge_to_users.length; i++) {
              if(i < this.relay.status.challenge + 1) {
                  print_names.push({
                      "name": this.relay.challenge_to_users[i],
                      "id": i
                    });
              }
              else {
                  print_names.push({
                      "name": "? ? ?",
                      "id": i
                  });
              }
          }
          return print_names;
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
  mounted() {
    this.continuous_update();
  },
  destroyed() {
      this.update = false;
  },
  methods: {
    continuous_update: async function() {
        while(this.update) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            let response = await fetch(global.api_url + "/relay/" + global.relay.code)
            global.relay = await response.json();
            this.relay = global.relay;
            if(global.relay.challenge_to_users[global.relay.status.challenge] === global.username) {
              this.$router.push({
                  path:'/yourturn'
              })
              break;
            }
            if(global.relay.status.stage === "complete") {
                this.$router.push({
                    path:'/complete'
                })
            }
        }
    },
    proceed: async function (time) { 
        let response = await fetch(global.api_url + "/relay/" + global.relay.code,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "stage": "active"
                    })
                })
                global.relay = await response.json()
        this.$router.push({
            path: '/ready'
        })
    },
  }
}
</script>