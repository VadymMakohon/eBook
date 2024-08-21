<template>
  <div class="app" :class="{ 'has-background-black': darkMode }">
    <div class="container is-max-desktop py-6 px-4">
      <div v-if="loading">
        <progress class="progress is-small is-info" max="100">60%</progress>
      </div>
      <div v-else-if="error">
        <p>Uh oh something went wrong. We couldn't query for listings - try again later!</p>
      </div>
      <div v-else-if="listings && listings.length">
        <ListingsList :listings="listings" :refetchListings="refetchListings" />
      </div>
      <div v-else-if="listings && !listings.length">
        <p>There doesn't appear to be any listings left!</p>
      </div>
      <button class="button is-small is-pulled-right my-4"
        @click="toggleDarkMode">
        {{ darkModeButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import ListingsList from './components/ListingsList';

import ListingsQuery from './graphql/ListingsQuery';
import useDarkMode from './hooks/useDarkMode';

export default {
  name: 'App',
  setup() {
    const { result, loading, error, refetch: refetchListings } = useQuery(ListingsQuery);
    const listings = useResult(result);

    const { darkMode, toggleDarkMode } = useDarkMode();
    const darkModeButtonText = computed(() => {
      return darkMode.value ? 'Light Mode' : 'Dark Mode';
    });

    return {
      darkMode,
      darkModeButtonText,
      listings,
      loading,
      error,
      refetchListings,
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