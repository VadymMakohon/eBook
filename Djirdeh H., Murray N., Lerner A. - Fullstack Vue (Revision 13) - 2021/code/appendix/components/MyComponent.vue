<template>
  <h2>{{ getGreeting }}</h2>
  <p>This is the Hello World component.</p>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      reversedGreeting: '!dlrow olleH'
    }
  },
  computed: {
    getGreeting() {
      return this.reversedGreeting.split("").reverse().join("");
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  width: 100%;
  text-align: center;
}
</style>
