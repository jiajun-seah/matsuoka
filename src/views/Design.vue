<template>
  <div id="app">
    <div class="container">
      <!-- <div class="button-wrapper">
        <button class="btn" @click="searchUnsplash('Autumn')">Autumn</button>
      </div> -->
      <stack
              :column-min-width="320"
              :gutter-width="8"
              :gutter-height="8"
              monitor-images-loaded
              id="mainStack"
      >
        <stack-item
                v-for="(image, i) in images"
                :key="i"
                style="transition: transform 300ms"
        >
        <!-- <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :src="image.url" :alt="image.alt_description">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-slow-in-slow-out black darken-2 v-card--reveal text-h5 white--text"
                  style="height: 100%;"
                >
                {{image.text}}
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover> -->
          <img :src="image.url" :alt="image.alt_description"/>
        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
import { Stack, StackItem } from "vue-stack-grid";

export default {
  name: "Design",
 components: { 
    Stack, 
    StackItem 
},
  data() {
    return {
      images: [
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2FA%20level%20scholarships_final.jpg?alt=media&token=1fb49ad5-dff9-41cb-98d2-73ff1d72b300",
                    text:"A Levels Scholarships - An EDM to promote MOE scholarships and awards."
                },
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2FAED(LBS)%20infosession%20email%20blast_v2.jpg?alt=media&token=d7f91770-7b0b-4123-b78f-8ab035dbaaf0",
                    text:"Allied Educator Infosession - Social media advert created to promote an info session for becoming an allied educator."
                },
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2FOutdoor%20Ad%20Ed_v2.jpg?alt=media&token=e7af56bc-cfd4-426b-9ede-562c6d94f803",
                    text:"Be an Outdoor Adventure Educator - Facebook advert promoting careers with MOE as an outdoor adventure educator."
                },
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2FPDGE_Pri-Sec-Textchart_v2.jpg?alt=media&token=aa8e8320-d09e-46b2-adb4-658160d5b40c",
                    text:"PGDE Infochart - A banner showcasing the PGDE program."
                },
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2FPE%20teacher.jpg?alt=media&token=e6979402-02f1-4872-8bdc-4c701e0f25bc",
                    text:"MOE PE Teaching Career Talk - EDM created to promote the career talk recruiting PE teachers."
                },
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2Ffoolscap(blue)_v2.jpg?alt=media&token=919bc37f-ef32-431a-9d88-c698cf811b29",
                    text:"It All Begins With You - Cover page artwork for foolscap papers to promote teaching as a career."
                },
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2Flanguages%20artwork.jpg?alt=media&token=7929b621-dfa4-46e2-afcf-252f75784e83",
                    text:"Join Teaching - An EDM to promote careers with MOE."
                },
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2FOutdoor%20Ad%20Ed_v2.jpg?alt=media&token=e7af56bc-cfd4-426b-9ede-562c6d94f803",
                    text:"Allied Educator Infosession - Social media advert created to promote an info session for becoming an allied educator."
                },
                {
                    // id: 1,
                    url:"https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/design%2FOutdoor%20Ad%20Ed_v2.jpg?alt=media&token=e7af56bc-cfd4-426b-9ede-562c6d94f803",
                    text:"Allied Educator Infosession - Social media advert created to promote an info session for becoming an allied educator."
                },
            ],
      
    };
  },  
  methods: {
    reflow( element ) {
      if ( element === undefined ) {
        element = document.getElementById("mainStack");
      }
    void( element.offsetHeight );
}
    },
  
  // mounted() {
  //   document.getElementById("mainStack").stackRef.reflow();
  // },
  updated() {
    this.reflow();
    console.log(document.getElementById("mainStack").offsetHeight)
  }
};
</script>

<style scoped>
.container { 
  padding-top:5%;
    max-width: 80%; 
    margin: 0 auto;
    position: relative;
} 
/* .button-wrapper { 
    display: flex; 
    justify-content: center; 
    margin-bottom: 25px; 
} 
.btn { 
    font-size: 18px; 
    background-color: #42b983; 
    color: white; padding: 10px 20px;
} */

img{
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  
}

v-hover{
  position:absolute;
}
</style>