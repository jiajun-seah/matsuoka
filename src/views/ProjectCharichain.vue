<template>
<div id="container">
  <v-parallax
    dark
    height="300"
    id="banner"
    src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Fbg.png?alt=media&token=a3ec55e3-588d-4acc-8acc-836ddeedc91f"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
  >
     <v-row align="center"
        justify="center">
            <v-col align="center"
        justify="center">
                <v-img 
                max-height=auto
                max-width= "40%"
                src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Flogo.png?alt=media&token=da088e3c-d6e1-4394-80eb-ed88284f38dc"
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
          color="#404050"
          height="100%"
          max-height="100%"
        >
        <v-img
        max-height=auto
        max-width= "100%"
        src="https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Flogo.png?alt=media&token=da088e3c-d6e1-4394-80eb-ed88284f38dc"
        >
        </v-img>
                
        <br/>
        <h4>Charichain makes use of blockchain to make donations between donors and charities more transparent and efficient. <br/><br/>

Smart contracts can be used to incentivise charities by releasing funds (in stages) when charities achieve a promised checkpoint.  <br/><br/>

The immutable nature of blockchain also allows for easier tracking of usage of donations.
</h4>
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
            width="600"
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
  name: "ProjectCharichain",
  components: {
  },
  data() {
    return {
      items: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Flogin.png?alt=media&token=90122c5d-035c-4d74-93d7-dc50e7112045",
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Fbrowse.png?alt=media&token=fc8de472-f4e6-4e2c-b736-f012004e8f82',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Fbrowse-1.png?alt=media&token=20046c8d-bb57-4be4-b283-d166304bf9aa',
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Fcampaign.png?alt=media&token=57fb9d56-4766-4140-8c65-791dd8a3b082",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Fdonate.png?alt=media&token=abad237e-4983-4372-9856-f38e0349d7a7",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Fprofile.png?alt=media&token=c6351338-41f7-4725-82cb-ce2897467f0a",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Fprofile-char.png?alt=media&token=69c5aec1-305e-4bcf-9350-b60a8d149fda",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/matsuoka-159f8.appspot.com/o/charichain%2Fongoing.png?alt=media&token=ded46be5-68cd-470d-9724-8624ee55829b",
        },
      ],
    };
  }
};
</script>

<style scoped>
#container{
  padding-top:2%;
  background-color: #5B5B6E !important;
}

#cardIndiv, #containerOuter, #containerInner, #containerInnerCol{
  background-color: transparent !important;
}

h1{
  padding : 2%;
  color: black;
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