import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    totalMarketCap: 0,
    total24HrVolume: 0,
    totalBTCPercentage: 0,
    loading: false,
  },
  mutations: {
    UPDATE_COINS(state, payload) {
      const {data} = payload;
      const coinsArray = Object.keys(data).map(key => {
        return data[key];
      });
      state.coins = coinsArray.sort((a,b) => a.rank - b.rank);
    },
    UPDATE_MARKET_DATA(state, payload) {
      const {data} = payload;
      const {quotes} = data;

      state.totalMarketCap = quotes.USD.total_market_cap;
      state.total24HrVolume = quotes.USD.total_volume_24h;
      state.totalBTCPercentage = data.bitcoin_percentage_of_market_cap;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    getCoins({commit}) {
      commit('SET_LOADING', true);
      axios.get('/api/coins').then((response) => {
        commit('UPDATE_COINS', response.data);
        commit('SET_LOADING', false);
      });
    },
    getMarketData({commit}) {
      axios.get('/api/market_data').then((response) => {
        commit('UPDATE_MARKET_DATA', response.data);
      });
    }
  },
  getters: {
    coins: state => state.coins,
    totalMarketCap: state => state.totalMarketCap,
    total24HrVolume: state => state.total24HrVolume,
    totalBTCPercentage: state => state.totalBTCPercentage,
    loading: state => state.loading,
    coinDataFromSlug: (state) => (websiteSlug) => {
      return state.coins.find(coin => coin.website_slug === websiteSlug);
    }
  }
})
