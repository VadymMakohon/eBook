import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home/home-page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
