import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMq from "vue-mq";
import customTheme from "./custom-theme";
import axios from "./axios";

import Chakra, {
  CThemeProvider,
  CColorModeProvider,
  CBox,
  CReset,
} from "@chakra-ui/vue";

Vue.use(Chakra, {
  extendTheme: customTheme,
});

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  },
});

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

axios.defaults.timeout = 10000;
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.common["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          // handle 400 error
          break;

        case 401:
          // session expired
          break;
        case 403:
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath },
          });
          break;
        case 404:
          // handle 404
          break;
        case 502:
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          }, 1000);
      }
      return Promise.reject(error.response);
    }
  }
);

new Vue({
  router,
  store,
  render: (h) =>
    h(CThemeProvider, [h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])])]),
}).$mount("#app");
