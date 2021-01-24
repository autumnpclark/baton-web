<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <v-btn block id='physical' @click="proceed('physical')">
          Physical
        </v-btn>
        <v-btn block id='mental' @click="proceed('mental')">
          Mental
        </v-btn>
        <v-btn block id='creative' @click="proceed('creative')">
          Creative
        </v-btn>
        <v-btn block id='service' @click="proceed('service')">
          Service
        </v-btn>
        <v-btn block id='random' @click="proceed('random')">
          Random
        </v-btn>
        <v-btn
        class="ma-1"
        color="grey"
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
