<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 class="primary--text">RELAY</h1>
        <p>Your team is gonna be </p>
        <h2 class="secondary--text">{{timer_txt}}</h2>
        <p>through a </p>
        <h2 class="primary--text">{{relay.category}}</h2>
        <p>relay! Don't forget to </p>
        <h2 class="secondary--text">PASS the BATON!</h2>
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
  computed: {
      timer_txt() {
          let timer = this.relay.timer.toString();
          let text = global.timers[timer];
          return text;
      }

  },
  methods: {
    proceed: async function() {
        await new Promise(resolve => setTimeout(resolve, 5000));
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