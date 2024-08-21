const inputComponent = {
  template: `<input placeholder='Enter a note' class="input is-small" type="text" />`,
}

const app = {
  components: {
    'input-component': inputComponent
  }
}

Vue.createApp(app).mount('#app')
