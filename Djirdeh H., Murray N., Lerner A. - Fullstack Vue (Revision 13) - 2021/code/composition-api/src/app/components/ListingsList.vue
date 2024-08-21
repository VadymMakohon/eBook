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
import { mapActions } from 'vuex';
import ListingsListItem from './ListingsListItem';
import Notification from './Notification';

export default {
  name: 'ListingsList',
  props: ['listings', 'isDark'],
  data() {
    return {
      notification: null,
    }
  },
  methods: {
    ...mapActions([
      'resetListings'
    ])
  },
  components: {
    ListingsListItem,
    Notification
  },
  mounted() {
    this.notification = "Welcome to NewlineBnB!";

    setTimeout(() => {
      this.notification = null;
    }, 1000);
  }
}
</script>
