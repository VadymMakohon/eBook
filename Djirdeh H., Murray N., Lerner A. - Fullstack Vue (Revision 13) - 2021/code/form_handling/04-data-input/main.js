const InputForm = { 
  template: `
    <div class="input-form">
      <form @submit="submitForm" class="ui form">\
        <div class="field">
          <input v-model="newItem" type="text" placeholder="Add an item!">
        </div>
        <button class="ui button">Submit</button>
      </form>
    </div>`,
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault();
      console.log(this.newItem)
    }
  }
}

Vue.createApp({
  components: {
    'input-form': InputForm
  }
}).mount('#app')
