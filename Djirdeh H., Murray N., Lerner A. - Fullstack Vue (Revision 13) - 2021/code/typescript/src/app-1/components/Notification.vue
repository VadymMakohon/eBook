<template>
  <div v-if="notification.active"
    class="notification is-light py-3 px-3 is-size-7"
    :class="{ 'is-primary': darkMode, 'is-info': !darkMode }">
    <button class="delete" @click="toggleNotification"></button>
    {{ notification.message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useDarkMode from '../hooks/useDarkMode';

export default defineComponent({
  name: 'Notification',
  props: [ 'notification', 'toggleNotification' ],
  setup() {
    const { darkMode } = useDarkMode();

    return {
      darkMode
    }
  }
});
</script>
