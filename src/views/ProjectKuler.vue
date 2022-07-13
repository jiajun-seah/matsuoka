<template>
<div id="container">
  <v-parallax
    dark
    height="300"
    id="banner"
    src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2FPicture1.jpg?alt=media&token=45b5f69a-ad81-497f-b887-92f964350615"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
  >
     <v-row align="center"
        justify="center">
            <v-col align="center"
        justify="center">
                <v-img 
                max-height=auto
                max-width= "40%"
                src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2Fkuler_logo_offwhite.png?alt=media&token=babf2bc2-63b9-423a-8431-82dc8e8fbef6"
                >
                </v-img>
            </v-col>
        </v-row>
  </v-parallax>
    

<v-container class="grey lighten-5" id="containerOuter">
    <v-row no-gutters id="containerInner">
      
      <v-col
        cols="6"
        md="4"
        id="containerInnerCol"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          color="#F37480"
          height="100%"
          max-height="100%"
        >
        <v-img
        max-height=auto
        max-width= "40%"
        src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2Fkuler_logo_offwhite.png?alt=media&token=babf2bc2-63b9-423a-8431-82dc8e8fbef6"
        >
        </v-img>
                
        <br/>
        <h4>Project Kuler is a web-based application developed as part of a school project. <br/> <br/>
          With consumption habits pivoting towards digital platforms, our project aims to provide an arts-focused online platform for local artists to publish and monetise their art 
          works and generate a potential source of income.  <br/><br/>This will allow local artists to boost their
          online resence and have greater effective reach to their audiences.</h4>
      </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <!-- screenshots -->
          <h1 class="title">Screenshots</h1>
    <v-sheet
        class="mx-auto"
        elevation="0"
        max-width="100%"
    >
        <v-slide-group
        v-model="model"
        class="pa-2"
        active-class="success"
        show-arrows
        >
        <v-slide-item
            v-for="(item, i) in items"
            :key="i"
            v-slot="{ active, toggle }"
        >
            <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="pa-4"
            width="800"
            @click="toggle"
            id="cardIndiv"
            >
            <v-img contain :src="item.src" ></v-img>
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
                <v-scale-transition>
                <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                ></v-icon>
                </v-scale-transition>
            </v-row>
            </v-card>
        </v-slide-item>
        </v-slide-group>
    </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>




</div>
</template>

<script>


export default {
  name: "ProjectVolarvis",
  components: {
  },
  data() {
    return {
      items: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2FSlide1.JPG?alt=media&token=f5f90417-fd6f-4697-88e0-d904173f072b",
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2FSlide2.JPG?alt=media&token=fc16d65e-9fb8-4257-8ce6-8caaef26db3f',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2FSlide3.JPG?alt=media&token=d6ee8f86-c7eb-441f-8177-953ac086307f',
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2FSlide4.JPG?alt=media&token=32de08cf-fe85-48b6-a2e8-32105ee59f6c",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2FSlide5.JPG?alt=media&token=4ca40ea0-706a-4386-9731-d7ac9983c302",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/kuler%2FSlide6.JPG?alt=media&token=c66d06cd-4c41-4219-b95a-8ffb71ce6a2c",
        },
      ],
    };
  }
};
</script>

<style scoped>
#container{
  padding-top:2%;
  background-color: #FA8F99 !important;
}

#cardIndiv, #containerOuter, #containerInner, #containerInnerCol{
  background-color: transparent !important;
}

h1{
  padding : 2%;
  color:#F37480;
  font-size:800px;
}

h4{
  padding: 2%;
  text-emphasis: none;
  text-decoration: none;
  color: white;
  text-align: justify;
}
</style>