<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <p>Welcome to Relay</p>
        <h2>{{relay.code}}</h2>
        <p>Hold tight while we assemble the rest of the team!</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import global from '~/assets/global';

export default {
  data: () => ({
      update: true,
      relay: global.relay
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
            let response = await fetch(global.api_url = "/relay/" + global.relay.code)
            
            global.relay = await response.json();
            
            if(global.relay.status.stage==="active") {
                this.$router.push({
                    path: '/ready'
                })
                break;
            }
        }
    }
  }
}
</script>