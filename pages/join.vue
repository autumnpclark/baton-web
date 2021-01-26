<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 class="primary--text">RELAY</h1>
        <v-text-field id='code'
            label="join code"
            solo
          ></v-text-field>
        <v-btn block x-large color="secondary" v-on:click="join_team">
          Join!
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import global from '~/assets/global';

export default {
  components: {
    
  },
  methods: {
    join_team: async function() {
      let code = document.getElementById('code').value.toUpperCase();

      let response = await fetch(global.api_url + "/relay/" + code + "/user",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "user": global.username
                    })
                })

      global.relay = await response.json();

      this.$router.push({
        path: '/waitguest'
      })
    }
  }
}
</script>
