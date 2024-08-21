<template>
  <div>
    <div v-if="!loading" class="weather container">
      <img class="weather__image" :src="require(`../assets/${imageAbbr}`)" />
      <h1 class="subtitle weather__city">{{ location }}</h1>
      <p class="weather__description">{{ weatherDescription }}</p>
      <p class="weather__temperature">{{ weatherTemp }} ºC</p>
    </div>
    <div v-if="loading" class="loader"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WeatherContainer',
  props: ['id'],
  computed: {
    ...mapGetters([
      'location',
      'weatherDescription',
      'imageAbbr',
      'weatherTemp',
      'loading'
    ])
  },
  watch: {
    id() {
      this.fetchWeather();
    }
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      this.$store.dispatch('fetchWeather', Number(this.id));
    }
  }
}
</script>

<style>
.weather__image {
  width: 150px;
  margin: 0 auto;
}

.weather__city {
  font-size: 2.5rem;
}

.weather__description {
  font-size: 1.5rem;
}

.weather__temperature {
  font-size: 2.5rem;
}

.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #53bf8e;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
