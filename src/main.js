import Vue from "vue";
import App from "./App.vue";
import router from "./router";
require("dotenv").config();
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
let config = require("./config/config");

(function() {
    // console.log(location);

    var domain = location.href.split("://");

    config.url = "https://api.ollebergkvist.me";

    if (domain[1].includes("localhost") || domain[1].includes("127.0.0.1")) {
        config.url = "http://localhost:1337";
    }
})();

// Enables Bootstrap
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
