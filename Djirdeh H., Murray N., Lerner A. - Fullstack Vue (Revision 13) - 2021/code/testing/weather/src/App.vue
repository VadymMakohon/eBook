<template>
  <div id="app" class="flex-align has-text-centered">
    <p class="app__date has-text-weight-bold">{{ date }}</p>
    <router-view></router-view>
    <div class="app__cities" v-if="!loading">
      <router-link
        v-for="city in cities"
        :to="'/weather/' + city.id"
        :key="city.id">{{ city.name }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      cities: [
        { id: 2459115, name: 'New York City, New York' },
        { id: 468739, name: 'Buenos Aires, Argentina' },
        { id: 2122265, name: 'Moscow, Russia' },
        { id: 1118370, name: 'Tokyo, Japan' },
        { id: 1105779, name: 'Sydney, Australia' },
        { id: 1398823, name: 'Lagos, Nigeria' }
      ]
    }
  },
  computed: {
    date() {
      return (new Date()).toDateString();
    },
    ...mapGetters([
      'loading'
    ])
  },
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app.flex-align {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__date {
  position: absolute;
  top: 10px;
  right: 10px;
}

.app__cities {
  position: absolute;
  bottom: 40px;
}

.app__cities a {
  color: #42b983;
  padding: 0 10px;
}
</style>
