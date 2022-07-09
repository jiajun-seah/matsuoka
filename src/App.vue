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
        <v-btn text class="button-link" to="/">
        Home
        </v-btn>

        <v-menu offset-y open-on-hover>

          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              Projects <v-icon icon="mdi-instagram"/>
              <!-- <router-link to="/projects">Projects</router-link> -->
            </v-btn>
            <!-- <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Dropdown
            </v-btn> -->
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              link
              @click="$router.push({ path: item.route }).catch(err => {})"
              
              
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>


        <!-- <v-btn text>
          <router-link to="/projects">Projects</router-link>
        </v-btn> -->
        <v-btn text class="button-link" to="/design">
        Design
        </v-btn>

        <v-btn text class="button-link" to="/amsterdam">
        Amsterdam
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
      items: [
        { title: 'School', route: '/projectsSchool'},
        { title: 'Personal', route: '/projectsPersonal' },
      ],
    };
  }
};
</script>

<style scoped>
.button-link .button-text {
  text-decoration: none !important;
  color:#000000;

}

.theme--light.v-btn--active::before, .theme--light.v-btn--active:hover::before, .theme--light.v-btn--active  {
  opacity: 1 !important;
  background-color: $blue;
} 
.v-btn-toggle > .v-btn.v-btn {
  opacity: 1;
}
.theme--light.v-btn:focus::before {
  opacity: 0;
}