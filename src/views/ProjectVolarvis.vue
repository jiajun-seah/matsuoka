<template>
<div id="main">
    <v-parallax
    dark
    height="300"
    id="banner"
    src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2Ffeature-graphic-blank.png?alt=media&token=072121c6-d534-4896-96e6-0a5ca73008a8"
  >
     <v-row align="center"
        justify="center">
            <v-col align="center"
        justify="center">
                <v-img 
                max-height=auto
                max-width= "40%"
                src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2FVolarvis%20Logo.png?alt=media&token=af068f8f-e7ba-459a-a246-37d2fd5d09f9">
                </v-img>
            </v-col>
        </v-row>
  </v-parallax>

    <!-- videos -->
    <v-container class="grey lighten-5" id="videosContainer">
    <v-row no-gutters id="videosContainerRow">
      <v-col id="videosContainerCol">
        <v-card
          class="pa-2"
          outlined
          tile
          color="transparent"
        >
          <h2>Game Trailer</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Kmrvnv7wzZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
          color="transparent"
        >
          <h2>Features Showcase</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/N6ySmurKTX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
    
<h2 class="title">Screenshots</h2>
    <!-- screenshots -->
    <v-sheet
        class="mx-auto"
        elevation="4"
        max-width="90%"
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
            class="ma-4"
            height="350"
            width="200"
            @click="toggle"
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

    <v-img
  max-height=auto
  max-width="100%"
  src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2Fvolastros%20footer.png?alt=media&token=9174b66a-6b22-49ab-a091-a17f6c9a9672"
></v-img>
  <!-- <v-row>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      class="d-flex child-flex"
      cols="3"
    >
      <v-img
        :src="item.src"
        aspect-ratio="0.5"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>

        
      </v-img>
    </v-col>
  </v-row> -->
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
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2FScreenshots-Artboard-1.png?alt=media&token=dd5b67a8-d2c8-4ca9-9dc6-42e86a131366",
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2FScreenshots-Artboard-2_1.png?alt=media&token=6e34a262-5751-4ee5-b340-bd38402ea1de',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2FScreenshots-Artboard-2_2.png?alt=media&token=f83a50f4-3281-47aa-85ef-55509cc941f7',
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2FScreenshots-Artboard-2_3.png?alt=media&token=9af95e8a-f034-4bc0-871f-4c2cefe2b5f1",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2FScreenshots-Artboard-2_4.png?alt=media&token=4972826a-e980-4f00-b6e7-ed8b498160c8",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2FScreenshots-Artboard-2_5.png?alt=media&token=9a4a0c9f-672a-4d39-88c5-9a1a792dc34a",
        },
      ],
    };
  }
};
</script>

<style scoped>
#main {
  background: url('https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/volarvis%2FMap%20-%20Blue.png?alt=media&token=c88dece3-9cd3-4ba7-b8fa-e33cb70c128a') no-repeat center center fixed !important;
  background-size: cover !important;
}

#videosContainer, #videoContainerRow, #videoContainerCol, #videoContainerCard{
    padding-top:5%;
    background-color: transparent !important;
}

h2{
    color: #1fa68d
}

#logo,{
    padding-top:10%;
}

#banner{
    padding-top:5%
}
.title{
    padding-left:5%;
}
</style>