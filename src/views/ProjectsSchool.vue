<template>
<v-app>
    <v-main>
      <SchoolPart/>
      <div class="works">
         <v-container class="grey lighten-5">
    
      <v-col cols="12">
        <v-card
          class="mx-auto"
          tile
          id="box"
        >
          <CardsWrapper/>
        </v-card>
      </v-col>

    <!-- <v-row>
      <v-col>
        <v-card
          class="pa-2"
          tile
          id="box"
        >
          <CardsWrapper/>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-2"
          tile
        >
          <CardsWrapper/>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-2"
          tile
        >
          <CardsWrapper/>
        </v-card>
      </v-col>
    </v-row> -->

  </v-container>
        
        </div>
    </v-main>
  </v-app>
  
</template>

<script>
import SchoolPart from "@/components/SchoolPart";
import CardsWrapper from "@/components/CardsWrapper";

export default {
  name: "ProjectsSchool",
  components: {
    SchoolPart,
    CardsWrapper
  },
  data() {
    return {
      alignments: [
        'start',
        'center',
        'end',
      ],
    };
  }
};
</script>

<style scoped>
#box {
  background-color: none !important;
  
}
</style>