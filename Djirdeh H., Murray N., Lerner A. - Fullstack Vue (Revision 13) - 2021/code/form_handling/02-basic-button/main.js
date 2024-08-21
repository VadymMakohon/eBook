const ButtonRow = { 
  template: `
    <div>
      <button @click="onButtonClick"
        name="button-hoodie"
        value="fullstack-hoodie"
        class="ui button">Hoodie</button>
      <button @click="onButtonClick"
        name="button-tee"
        value="fullstack-tee"
        class="ui button">Tee</button>
      <button @click="onButtonClick"
        name="button-fitted-cap"
        value="fullstack-fitted-cap"
        class="ui button">Fitted Cap</button>
      <button @click="onButtonClick"
        name="button-jacket"
        value="fullstack-jacket"
        class="ui button">Jacket</button>
    </div>`,
  methods: {
    onButtonClick(evt) {
      const button = evt.target;
      console.log(`The user clicked ${button.name}: ${button.value}`); 
    }
  }
}

Vue.createApp({
  components: {
    'button-row': ButtonRow
  }
}).mount('#app')
