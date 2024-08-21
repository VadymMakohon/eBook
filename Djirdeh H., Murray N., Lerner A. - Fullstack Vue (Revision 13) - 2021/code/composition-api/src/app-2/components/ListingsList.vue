<template>
  <div id="listings">
    <Notification :notification="notification" :toggleNotification="toggleNotification" />
    <div v-for="listing in listings" :key="listing.id">
      <ListingsListItem :listing="listing" />
    </div>
    <button
      class="button is-light"
      :class="{ 'is-primary': darkMode, 'is-info': !darkMode }"
      @click="resetListings" 
      :disabled="listings.length === 3">
      Reset
    </button>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import ListingsListItem from './ListingsListItem';
import Notification from './Notification';

import useDarkMode from '../hooks/useDarkMode';
import useNotification from '../hooks/useNotification';

export default {
  name: 'ListingsList',
  props: ['listings'],
  setup() {
    const store = useStore();
    const { darkMode } = useDarkMode();
    const { notification, setNotification, toggleNotification } = useNotification();

    const resetListings = () => {
      setNotification("Listings have been reset!");
      return store.dispatch('resetListings')
    };

    onMounted(() => {
      setNotification("Welcome to NewlineBnB!");
    });

    return {
      darkMode,
      notification,
      toggleNotification,
      resetListings
    }
  },
  components: {
    ListingsListItem,
    Notification
  }
}
</script>
