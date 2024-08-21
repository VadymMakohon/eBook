import { createStore } from 'vuex';
import product from './modules/product';
import cart from './modules/cart';
import login from './modules/login';

export default createStore({
  modules: {
    product,
    cart,
    login
  }
});
