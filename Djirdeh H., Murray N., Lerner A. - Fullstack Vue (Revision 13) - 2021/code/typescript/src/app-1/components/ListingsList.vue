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

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue';

import ListingsListItem from './ListingsListItem.vue';
import Notification from './Notification.vue';

import useDarkMode from '../hooks/useDarkMode';
import useNotification from '../hooks/useNotification';
import { Store } from '../store';

export default defineComponent({
  name: 'ListingsList',
  props: [ 'listings' ],
  setup() {
    const store = inject<Store>('store');
    const { darkMode } = useDarkMode();
    const { notification, setNotification, toggleNotification } = useNotification();

    const resetListings = () => {
      setNotification("Listings have been reset!");
      return store?.actions.resetListings();
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
});
</script>
