import { createStore } from 'vuex';
import axios from 'axios';

const state = {
  listings: [],
  loading: false
};

const mutations = {
  UPDATE_LISTINGS(state, payload) {
    state.listings = payload;
  },
  LOADING_PENDING (state) {
    state.loading = true;
  },
  LOADING_COMPLETE (state) {
    state.loading = false;
  },
};

const actions = {
  getListings({ commit }) {
    commit('LOADING_PENDING');
    return axios.get('/api/listings').then((response) => {
      commit('UPDATE_LISTINGS', response.data);
      commit('LOADING_COMPLETE');
    });
  },
  removeListing({ commit }, listing) {
    return axios.post('/api/listings/delete', listing).then((response) => {
      commit('UPDATE_LISTINGS', response.data)
    });
  },
  resetListings({ commit }) {
    return axios.post('/api/listings/reset').then((response) => {
      commit('UPDATE_LISTINGS', response.data)
    });
  },
};

const getters = {
  listings: state => state.listings,
  loading: state => state.loading
};

export default createStore({
  state,
  mutations,
  actions,
  getters
});
