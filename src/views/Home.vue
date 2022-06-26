<template>
  <v-app>
    <v-main>
      <router-view/>
      <Parallax/>
      <Bio/>
    </v-main>
  </v-app>
</template>

<script>
import Parallax from "@/components/Parallax";
import Bio from "@/components/Bio";

export default {
  name: "App",
  components: {
    Parallax,
    Bio
  },
  data() {
    return {
      //
    };
  }
};
</script>