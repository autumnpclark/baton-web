<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <ul id="players">
            <li v-for="user in relay.users" :key="user">
                {{ user }}
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