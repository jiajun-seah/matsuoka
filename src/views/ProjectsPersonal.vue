<template>
<v-app>
    <v-main>
      <div class="works">
            <PersonalPart/>
            <CardsWrapper/>
        </div>
    </v-main>
  </v-app>
  
</template>

<script>
import PersonalPart from "@/components/PersonalPart";
import CardsWrapper from "@/components/CardsWrapper";

export default {
  name: "ProjectsPersonal",
  components: {
    PersonalPart,
    CardsWrapper
  },
  data() {
    return {
      //
    };
  }
};
</script>