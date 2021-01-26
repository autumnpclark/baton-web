<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 class="primary--text">RELAY</h1>
        <h2 class="accent--text">YOU DID IT!!!</h2>
        <h3>Congrats on finishing your relay!</h3>
        <h3>Come back and race again soon!</h3>
        <v-btn
        class="ma-1"
        color="secondary"
        plain
        @click="proceed"
      >
        Return to Main Menu
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
    proceed: async function() {
        this.$router.push({
                    path:'/'
        })
    }  
  }
}
</script>