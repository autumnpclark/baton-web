<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 color="primary" class="primary--text">RELAY</h1>
        <v-text-field id='username'
            label="username"
            solo
          ></v-text-field>
        <v-btn block color="primary" x-large v-on:click="create_team_button">
          Start a RELAY
        </v-btn>
        <v-btn block color="secondary" x-large v-on:click="join_local_team">
          Join a local team
        </v-btn>
        <v-btn block x-large>
          Join a random team
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
    join_local_team: function () {
      let username = document.getElementById('username').value;
      global.username = username;
      this.$router.push({
        path: '/join'
      })
    },
    create_team_button: async function(e) {
      let username = document.getElementById('username').value;
      let response = await fetch(global.api_url + "/relay",{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "user": username
          })
      })

      let relay = await response.json();

      console.log(relay);

      global.username = username;
      global.relay = relay;

      this.$router.push({
        path: '/code'
      })
    }
  }
}
</script>
