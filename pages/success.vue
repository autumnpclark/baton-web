<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <h2>SUCCESS!</h2>
        <p>You passed the baton! </p>
        <p>Don't forget to keep cheering on your teammates through their part of the relay!</p>
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
  mounted() {
    this.proceed();
  },
  methods: {
    proceed: async function() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("timer works")
            let response = await fetch(global.api_url + "/relay/" + global.relay.code)
            console.log("fetch works")
            
            global.relay = await response.json();

            console.log("setting relay worked")
            console.log(global.relay)
            if(global.relay.challenge_to_users[global.relay.status.challenge] === global.username) {
              this.$router.push({
                  path:'/yourturn'
              })
            }
            else {
                this.$router.push({
                    path:'/tracker'
                })
            }     
    }
  }
}
</script>