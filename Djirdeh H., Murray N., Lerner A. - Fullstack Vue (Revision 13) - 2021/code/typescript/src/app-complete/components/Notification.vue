<template>
  <div v-if="notification.active"
    class="notification is-light py-3 px-3 is-size-7"
    :class="{ 'is-primary': darkMode, 'is-info': !darkMode }">
    <button class="delete" @click="toggleNotification"></button>
    {{ notification.message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import useDarkMode from '../hooks/useDarkMode';
import { NotificationInfo } from '../hooks/useNotification';

export default defineComponent({
  name: 'Notification',
  props: {
    notification: Object as PropType<NotificationInfo['notification']>,
    toggleNotification: Function as PropType<NotificationInfo['toggleNotification']>
  },
  setup() {
    const { darkMode } = useDarkMode();

    return {
      darkMode
    }
  }
});
</script>
