<template>
  <div class="app" :class="{ 'has-background-black': darkMode }">
    <div class="container is-max-desktop py-6 px-4">
      <div v-if="loading">
        <progress class="progress is-small is-info" max="100">60%</progress>
      </div>
      <div v-if="!loading">
        <ListingsList :listings="listings" />
      </div>
      <button class="button is-small is-pulled-right my-4"
        @click="toggleDarkMode">
        {{ darkModeButtonText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import ListingsList from './components/ListingsList';

import useDarkMode from './hooks/useDarkMode';

export default defineComponent({
  name: 'App',
  setup() {
    const store = inject('store');
    const { darkMode, toggleDarkMode } = useDarkMode();

    const darkModeButtonText = computed(() => {
      return darkMode.value ? 'Light Mode' : 'Dark Mode';
    });
    const listings = computed(() => store.state.listings);
    const loading = computed(() => store.state.loading);

    store.actions.getListings();

    return {
      darkMode,
      darkModeButtonText,
      listings,
      loading,
      toggleDarkMode,
    }
  },
  components: {
    ListingsList
  }
});
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
