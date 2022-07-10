<template>
<v-app>
    <v-main>
      <SchoolPart/>
      <div class="works">
         <v-container class="grey lighten-5">
    
      <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
        <v-card
          class="mx-auto"
        >
          <v-img :src="item.src" height="300px"></v-img>

          <v-card-title v-text="item.title"></v-card-title>

          <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>

          <v-card-actions>
            
          <v-btn
          icon
        >
          <v-icon size="24px">mdi-github</v-icon>
          
        </v-btn>

        <v-btn
          color="black lighten-2"
          text
          @click="$router.push({ path: item.route }).catch(err => {})"
          >
          See More
        </v-btn>
          
        <v-spacer></v-spacer>

          <v-btn
            icon
            @click="item.show = !item.show"
          >
          
            <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="item.show">
            <v-divider></v-divider>

            <v-card-text v-text="item.description1"></v-card-text>
            <v-card-text v-text="item.description2"></v-card-text>
            <v-card-text v-text="item.description3"></v-card-text>
            <v-card-text v-text="item.description4"></v-card-text>
            
          </div>
        </v-expand-transition>
        </v-card>
      </v-col>


  </v-container>
        
        </div>
    </v-main>
  </v-app>
  
</template>

<script>
import SchoolPart from "@/components/SchoolPart";
// import CardsWrapper from "@/components/CardsWrapper";

export default {
  name: "ProjectsSchool",
  components: {
    SchoolPart,
    // CardsWrapper
  },
  data() {
    return {
      alignments: [
        'start',
        'center',
        'end',
      ],
      items: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2Ffeature-graphic.png?alt=media&token=aeb0ba52-0c01-4549-8e40-8cadf8709eb4",
          title: 'Volarvis',
          subtitle: 'A creature-collecting android game with elements of crafting, collection and evolution',
          description1: 'Module Code: CP2106',
          description2: 'Team members: Ng Xiang Han',
          description3: 'Tech Stack: C#, Unity, Photoshop, Procreate, Google Play Services',
          route:'/projectVolarvis',
          show:false
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/images%2Fkuler-graphic.png?alt=media&token=50d1d64c-8007-4fa9-a31a-d13bc83234ee',
          title: 'Kuler',
          subtitle: 'An arts-focused online platform for local artists to publish and monetise their art works and generate a potential source of income',
          description1: 'Module Code: BT3103',
          description2: 'Team members: Andrew Wong See Siang, Chuang Kuang Yu Martin, Ng Xiang Han, Noah Teo Rui-Sheng',
          description3: 'Tech Stack: HTML/CSS (Vue), Javascript, Firebase, Figma',
          route:'/projectKuler',
          // description4: 'A web-based application ',
          show:false
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/images%2Flogin.png?alt=media&token=5faa987e-d0f0-456d-8088-dc73057467d1',
          title: 'Project Charichain',
          subtitle: 'An Ethereum-based blockchain application with the purpose of making charity donation transactions more efficient and transparent',
          description1: 'Module Code: IS4302',
          description2: 'Team members: Lin Yong Qian, Ng Xiang Han, Sahil S/O Saneev Gathani, Sun Jiaze',
          description3: 'Tech Stack: Solidity, Javascript, Figma',
          route:'/projectCharichain',
          show:false
        },
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