// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import "muse-ui/dist/theme-light.css";

// import { StfSelect, StfSelectOption } from "stf-vue-select";
// import "stf-vue-select/dist/lib/stf-vue-select.min.css";

// import vSelect from "vue-select";
// Vue.component("v-select", vSelect);



// Vue.component("stf-select-option", StfSelectOption);
// Vue.component("stf-select", StfSelect);

Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
