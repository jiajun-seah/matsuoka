<template>
<v-app>
    <v-main>
      <div class="works">
            <PersonalPart/>
        </div>
    </v-main>
  </v-app>
  
</template>

<script>
import PersonalPart from "@/components/PersonalPart";

export default {
  name: "ProjectsPersonal",
  components: {
    PersonalPart,
  },
  data() {
    return {
      //
    };
  }
};
</script>