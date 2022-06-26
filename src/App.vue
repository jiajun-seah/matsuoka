<template>
  <v-app>
    <v-toolbar light
    elevation="4"
    flat
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>JIA JUN</span>
        <span class="font-weight-light"> SEAH</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text class="button-link">
          <router-link to="/" class="button-text">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/projects">Projects</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/amsterdam">Amsterdam</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-main>
      <router-view/>
    </v-main>
  <Footer/>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
.button-link .button-text {
  text-decoration: none !important;
  color:#000000;

}
</style>