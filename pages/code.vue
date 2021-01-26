<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 class="primary--text">RELAY</h1>
        <p>Fantastic! Your team's join code is</p>
        <h2 class="secondary--text">{{relay.code}}</h2>
        <p>Send this code to up to 7 teammates!</p>
        <v-btn
        class="ma-1"
        color="secondary"
        @click="go_back"
      >
        Go Back
      </v-btn>

      <v-btn
        class="ma-1"
        color="primary"
        plain
        @click="proceed"
      >
        Okay!
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
    proceed: function () {
        this.$router.push({
            path: '/category'
        })
    },
    go_back: function () {
        this.$router.back();
    }
  }
}
</script>
