<template>
<v-app>
    <v-main>
      <div class="works">
            <h1>This is an about page</h1>
            <SchoolPart/>
        </div>
    </v-main>
  </v-app>
  
</template>

<script>
import SchoolPart from "@/components/SchoolPart";

export default {
  name: "ProjectsSchool",
  components: {
    SchoolPart,
  },
  data() {
    return {
      //
    };
  }
};
</script>