import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { VueSpinners } from "@saeris/vue-spinners";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";

import router from "@/router";
import { dollarFilter, percentageFilter } from "./filters";

Vue.filter("dollar", dollarFilter);
Vue.filter("percentage", percentageFilter);
Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
