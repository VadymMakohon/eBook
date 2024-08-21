import { createStore } from 'vuex';
import product from './modules/product';
import cart from './modules/cart';

export default createStore({
  modules: {
    product,
    cart
  }
});
