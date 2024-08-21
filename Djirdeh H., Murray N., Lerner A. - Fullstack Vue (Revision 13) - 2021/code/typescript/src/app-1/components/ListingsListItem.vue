<template>
  <article class="media mb-5">
    <figure class="media-left">
      <p class="image is-128x128 is-hidden-mobile">
        <img :src="listing.image">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p :class="{ 'has-text-white': darkMode}">
          <strong :class="{ 'has-text-white': darkMode}">
            {{ listing.title }}
          </strong>
          <small class="pl-1"
            :class="{ 'has-text-primary': darkMode, 'has-text-info': !darkMode}">
            {{ listing.address }}
          </small>
          <br>
          {{ listing.description }}
          <br>
          <small class="has-text-weight-bold"
            :class="{ 'has-text-primary': darkMode, 'has-text-info': !darkMode}">
            <span>${{ listing.price/100 }}/day</span> · <span>Rating: {{ listing.rating }}/5</span>
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <button class="button is-light is-small"
        :class="{ 'is-primary': darkMode, 'is-info': !darkMode}" @click="removeListing(listing)">
        Remove
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

import useDarkMode from '../hooks/useDarkMode';
import useNotification from '../hooks/useNotification';
import { Store } from '../store';

export default defineComponent({
  name: 'ListingsListItem',
  props: [ 'listing' ],
  setup(props) {
    const store = inject<Store>('store');
    const { darkMode } = useDarkMode();
    const { setNotification } = useNotification();

    const removeListing = () => {
      setNotification("Listing has been deleted");
      return store?.actions.removeListing(props.listing);
    }

    return {
      darkMode,
      removeListing
    }
  }
});
</script>
