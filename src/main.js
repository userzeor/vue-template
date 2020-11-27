import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from '@/store/index'
import "./style/reset.css";
import "./style/util.styl";
import "./utils/rem";
import mixins from "./mixin/mixin";
// import vconsole from 'vconsole';
Vue.config.productionTip = false;

Vue.mixin(mixins);

// if (process.env.NODE_ENV === 'development') {
//   new vconsole();
// }

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");