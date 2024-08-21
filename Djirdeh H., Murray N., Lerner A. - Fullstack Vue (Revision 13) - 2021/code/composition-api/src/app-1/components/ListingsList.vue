<template>
  <div id="listings">
    <Notification :notification="notification" :isDark="isDark" />
    <div v-for="listing in listings" :key="listing.id">
      <ListingsListItem :listing="listing" :isDark="isDark" />
    </div>
    <button
      class="button is-light"
      :class="{ 'is-primary': isDark, 'is-info': !isDark }"
      @click="resetListings" 
      :disabled="listings.length === 3">
      Reset
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import ListingsListItem from './ListingsListItem';
import Notification from './Notification';

export default {
  name: 'ListingsList',
  props: ['listings', 'isDark'],
  setup() {
    // access the store
    const store = useStore();

    // reactive data properties
    const notification = ref(null);

    // methods
    const resetListings = () => store.dispatch('resetListings');

    // mounted lifecyle hook
    onMounted(() => {
      notification.value = "Welcome to NewlineBnB!";

      setTimeout(() => {
        notification.value = null;
      }, 1000);
    });

    // return properties for component to access
    return {
      notification,
      resetListings
    }
  },
  components: {
    ListingsListItem,
    Notification
  }
}
</script>
