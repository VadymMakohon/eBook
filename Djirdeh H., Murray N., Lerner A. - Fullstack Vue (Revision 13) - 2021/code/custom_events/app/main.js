const inputComponent = {
  template: `<input class="input is-small" type="text" />`
}

const app = {
  components: {
    'input-component': inputComponent
  }
};

Vue.createApp(app).mount('#app');
