<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="dark lighten-1 white--text text-center"
      id="footerNotes"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        This website was designed using
        <a href="https://vuejs.org/">Vue.js</a>  with the help of
        <a href="https://vuetifyjs.com/en/">Vuetify</a> and
        <a href="https://router.vuejs.org/">Vue Router</a>. Find it on
        <a href="https://github.com/jiajun-seah/matsuoka">GitHub</a>.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Jia Jun</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-linkedin',
        'mdi-instagram',
        'mdi-github',
      ],
    }),
  }
</script>

<style scoped>
a, a:visited{
  text-decoration:underline;
  color:white;
}
#footerNotes{
  width:100%;
}
</style>