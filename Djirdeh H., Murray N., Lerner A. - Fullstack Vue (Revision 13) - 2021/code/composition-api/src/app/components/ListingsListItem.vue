<template>
  <article class="media mb-5">
    <figure class="media-left">
      <p class="image is-128x128 is-hidden-mobile">
        <img :src="listing.image">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p :class="{ 'has-text-white': isDark }">
          <strong :class="{ 'has-text-white': isDark }">
            {{ listing.title }}
          </strong>
          <small class="pl-1" 
            :class="{ 'has-text-primary': isDark, 'has-text-info': !isDark }">
            {{ listing.address }}
          </small>
          <br>
          {{ listing.description }}
          <br>
          <small class="has-text-weight-bold"
            :class="{ 'has-text-primary': isDark, 'has-text-info': !isDark }">
            <span>${{ listing.price/100 }}/day</span> · <span>Rating: {{ listing.rating }}/5</span>
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <button class="button is-light is-small"
        :class="{ 'is-primary': isDark, 'is-info': !isDark }" @click="removeListing(listing)">
        Remove
      </button>
    </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ListingsListItem',
  props: ['listing', 'isDark'],
  methods: {
    ...mapActions([
      'removeListing'
    ])
  }
}
</script>
