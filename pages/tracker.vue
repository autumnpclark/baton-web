<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <ul id="players">
            <li v-for="user in redacted_list" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
        <v-btn
        class="ma-1"
        color="error"
        plain
        @click="proceed"
      >
        Let's Go!
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
            let response = await fetch("http://localhost:3000/relay/" + global.relay.code)
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
        let response = await fetch("http://localhost:3000/relay/" + global.relay.code,{
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