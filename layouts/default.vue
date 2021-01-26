<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <v-btn v-on:click="click_bt">
        <v-icon>{{bt_icon}}</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import global from '~/assets/global';

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      g: global
    }
  },
  computed: {
    bt_icon() {
      if(this.g.bleManager.status === "disconnected") {
        return "mdi-bluetooth-off";
      }
      if(this.g.bleManager.status === "connected") {
        return "mdi-bluetooth"
      }
      return "mdi-timer-sand-empty"
    }
  },
  methods: {
    click_bt: async function() {
      console.log("Click BLE")
      await global.bleManager.init();
    }
  }
}
</script>
