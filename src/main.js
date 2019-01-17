import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import router from "./router/index";
import store from "./store/index";
import axios from "axios";

import PaperDashboard from "./plugins/paperDashboard";
import { DatePicker } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import "vue-notifyjs/themes/default.css";

// configure language
locale.use(lang);

Vue.prototype.$http = axios;
Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
Vue.use(PaperDashboard);
Vue.use(DatePicker);
// Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
