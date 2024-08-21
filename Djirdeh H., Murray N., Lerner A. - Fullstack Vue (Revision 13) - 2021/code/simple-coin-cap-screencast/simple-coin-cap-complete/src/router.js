import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home/home-page.vue'
import AboutPage from '@/views/about/about-page.vue';
import NotFoundPage from '@/views/not-found/not-found-page.vue';
import CoinDetailsPage from '@/views/coin-details/coin-details-page.vue';
import store from '@/store';

Vue.use(Router)

const checkIfCoinExists = (to, from, next) => {
  const slug = to.params.slug;
  const coins = store.getters.coins;

  if (!coins.length) {
    store.watch(
      state => state.coins,
      () => {
        if (store.getters.coinDataFromSlug(slug)) next();
        else next('/not-found');
      }
    )
  } else {
    if (store.getters.coinDataFromSlug(slug)) next();
    else next('/not-found');
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    },
    {
      path: '/currency/:slug',
      name: 'CoinDetailsPage',
      component: CoinDetailsPage,
      props: true,
      beforeEnter: checkIfCoinExists
    }
  ]
})
