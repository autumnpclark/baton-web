<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>RELAY</h1>
        <h2>YOU DID IT!!!</h2>
        <p>Congrats on finishing your relay!</p>
        <p>Come back and race again soon!</p>
        <v-btn
        class="ma-1"
        color="error"
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