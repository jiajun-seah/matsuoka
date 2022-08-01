<template>
<div id="app">
    <lightbox 
        :images="images" 
        title="Feed Gallery"
    ></lightbox>
</div>
</template>
<script>
// import Carousel from "@/components/Carousel";

export default {
  name: "Design",
  components: {
  },
  data() {
    return {
      images: [
        {
            src: 'https://unsplash.it/500',
            caption: 'Image 1',
        },
        {
            src: 'https://unsplash.it/501',
        },
      ],
    };
  }
};
</script>