import { createStore } from 'vuex';
import axios from 'axios';

const state = {
  location: '',
  weatherDescription: '',
  imageAbbr: '',
  weatherTemp: 0,
  loading: false
};

const mutations = {
  UPDATE_LOCATION(state, payload) {
    state.location = payload;
  },
  UPDATE_WEATHER_DETAILS (state, payload) {
    state.weatherDescription = payload.weather_state_name;
    state.imageAbbr = payload.weather_state_abbr + '.png';
    state.weatherTemp = payload.the_temp.toFixed();
  },
  LOADING_PENDING (state) {
    state.loading = true;
  },
  LOADING_COMPLETE (state) {
    state.loading = false;
  }
};

const actions = {
  fetchWeather ({ commit }, id) {
    commit('LOADING_PENDING');
    axios.get(`/api/weather`, {
      params: {
        id: id
      }
    }).then((response) => {
      const weather = response.data.consolidated_weather[0];
      commit('UPDATE_LOCATION', response.data.title);
      commit('UPDATE_WEATHER_DETAILS', weather);
      commit('LOADING_COMPLETE');
    });
  },
};

const getters = {
  location: state => state.location,
  weatherDescription: state => state.weatherDescription,
  imageAbbr: state => state.imageAbbr,
  weatherTemp: state => state.weatherTemp,
  loading: state => state.loading
};

export default createStore({
  state,
  mutations,
  actions,
  getters
});
