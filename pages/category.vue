<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 class="primary--text">RELAY</h1>
        <h2>Choose a category to compete in!</h2>
        <v-btn block color="primary" id='physical' @click="proceed('physical')">
          Physical
        </v-btn>
        <v-btn block color="secondary" id='mental' @click="proceed('mental')">
          Mental
        </v-btn>
        <v-btn block color="accent" id='creative' @click="proceed('creative')">
          Creative
        </v-btn>
        <v-btn block  id='service' @click="proceed('service')">
          Service
        </v-btn>
        <v-btn block color="info" id='random' @click="proceed('random')">
          Random
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
    proceed: function (category) {
        console.log(category);
        global.relay.category = category;
        this.$router.push({
            path: '/time'
        })
    },
    go_back: function () {
        this.$router.back();
    }
  }
}
</script>
