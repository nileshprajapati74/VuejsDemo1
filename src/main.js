import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'

import "@/assets/plugins/fontawesome-free/css/all.min.css"
// import "@/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
// import "@/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
import "@/assets/plugins/jqvmap/jqvmap.min.css"
import "@/assets/dist/css/adminlte.min.css"
import "@/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import "@/assets/plugins/daterangepicker/daterangepicker.css"
import "@/assets/plugins/summernote/summernote-bs4.css"


Vue.use(VueRouter)

const router = new VueRouter({ routes });

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
