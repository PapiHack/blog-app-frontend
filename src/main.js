import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueSweetalert2)

const router = new VueRouter({
  routes,
  mode: 'history'
})

// I confgure here root API endpoint
// Vue.http.options.root = 'http://localhost:8000/'

//I create a date filter here (for formatting date from backend API)
Vue.filter('formatDate', value => {
  if (value) {
    moment.locale('fr')
    return moment(value).format('DD/MM/YYYY hh:mm a')
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
