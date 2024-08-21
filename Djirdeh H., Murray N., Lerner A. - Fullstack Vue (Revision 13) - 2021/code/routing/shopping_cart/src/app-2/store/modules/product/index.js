import axios from 'axios';

const state = {
  productItems: [] 
}

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;
  }
}

const actions = {
  getProductItems ({ commit }) {
    axios.get('/api/products?token=D6W69PRgCoDKgHZGJmRUNA').then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data)
    });
  }
}

const getters = {
  productItems: state => state.productItems,
  productItemFromId: (state) => (id) => {
    return state.productItems.find(productItem => productItem.id === id)
  }
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;
