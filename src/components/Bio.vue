<template>
  <v-container class="grey lighten-5" id="container">
    <v-row no-gutters id="container-inner">
        <v-col
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          id="left"
        >
          <img src="@/assets/profile.jpg" id="profile-photo">
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
          <div id="intro">
            <h2>Hello there! I'm </h2>
            <h1>Jia Jun</h1>
            <h3>Currently a Year 3 Business Analytics Undergraduate at NUS <br/> with a 2nd Major in Statistics</h3>
          </div>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<style scoped>
/* #container, #container-inner {
    padding: 0;
} */

#profile-photo {
    width: 100%;
}
#left{
    margin:0% !important;
}

img{
    padding:0%;
}

h2 {
    padding-left:5%;
    font-size:45px;
    line-height: 70px;
}
h1 {
    padding-left:5%;
    font-size:90px;
    line-height: 90px;
}
h3 {
    padding-top:2%;
    padding-left:5%;
}
</style>