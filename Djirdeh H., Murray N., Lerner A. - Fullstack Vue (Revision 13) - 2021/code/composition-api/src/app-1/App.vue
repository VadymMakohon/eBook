<template>
  <div class="app" :class="{ 'has-background-black': isDark }">
    <div class="container is-max-desktop py-6 px-4">
      <div v-if="loading">
        <progress class="progress is-small is-info" max="100">60%</progress>
      </div>
      <div v-if="!loading">
        <ListingsList :listings="listings" :isDark="isDark" />
      </div>
      <button class="button is-small is-pulled-right my-4"
        @click="toggleDarkMode">
        {{ darkModeButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import ListingsList from './components/ListingsList';

export default {
  name: 'App',
  setup() {
    // access the store
    const store = useStore();

    // reactive data properties
    const isDark = ref(false);

    // computed properties
    const darkModeButtonText = computed(() => {
      return isDark.value ? 'Light Mode' : 'Dark Mode';
    });
    const listings = computed(() => store.getters.listings);
    const loading = computed(() => store.getters.loading);

    // methods
    const toggleDarkMode = () => {
      isDark.value = !isDark.value;
    }

    // fire off actions for component created lifecycle stage
    store.dispatch('getListings');

    // return properties for component to access
    return {
      isDark,
      darkModeButtonText,
      listings,
      loading,
      toggleDarkMode,
    }
  },
  components: {
    ListingsList
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%
}
</style>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>