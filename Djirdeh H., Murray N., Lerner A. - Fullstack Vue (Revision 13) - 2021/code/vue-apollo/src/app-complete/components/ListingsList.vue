<template>
  <div id="listings">
    <Notification :notification="notification" :toggleNotification="toggleNotification" />
    <div v-for="listing in listings" :key="listing.id">
      <ListingsListItem :listing="listing" :refetchListings="refetchListings" />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

import ListingsListItem from './ListingsListItem';
import Notification from './Notification';

import useDarkMode from '../hooks/useDarkMode';
import useNotification from '../hooks/useNotification';

export default {
  name: 'ListingsList',
  props: ['listings', 'refetchListings'],
  setup() {
    const { darkMode } = useDarkMode();
    const { notification, setNotification, toggleNotification } = useNotification();

    onMounted(() => {
      setNotification("Welcome to NewlineBnB!");
    });

    return {
      darkMode,
      notification,
      toggleNotification
    }
  },
  components: {
    ListingsListItem,
    Notification
  }
}
</script>
