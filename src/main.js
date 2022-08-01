import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import lightbox from 'vlightbox'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  lightbox,
  render: h => h(App)
}).$mount('#app')
