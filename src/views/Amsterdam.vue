<template>
  <v-app>
    <v-main>
      <router-view/>
      <Carousel/>
    </v-main>
  </v-app>
</template>

<script>
import Carousel from "@/components/Carousel";

export default {
  name: "Amsterdam",
  components: {
    Carousel
  },
  data() {
    return {
      //
    };
  }
};
</script>