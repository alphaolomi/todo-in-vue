import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// process.env.NODE_ENV === "production"
Vue.config.productionTip = false;

import '@/assets/css/tailwind.css'

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
