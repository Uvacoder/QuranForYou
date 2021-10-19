import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMq from 'vue-mq'
import customTheme from "./custom-theme";

import Chakra, {
  CThemeProvider,
  CColorModeProvider,
  CBox,
  CReset,
} from "@chakra-ui/vue";


Vue.use(Chakra, {
  extendTheme: customTheme
});

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) =>
    h(CThemeProvider, [h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])])]),
}).$mount("#app");
