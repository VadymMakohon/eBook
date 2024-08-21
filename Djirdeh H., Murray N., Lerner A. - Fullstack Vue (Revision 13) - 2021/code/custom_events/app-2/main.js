const inputComponent = {
  template: `<input
        :placeholder="placeholder"
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small" type="text" />`,
  props: ['placeholder'],
  emits: ['add-note'],
  data() {
    return {
      input: ''
    };
  },
  methods: {
    monitorEnterKey() {
      this.$emit('add-note', {
        note: this.input,
        timestamp: new Date().toLocaleString()
      });
      this.input = '';
    }
  }
};

const app = {
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: 'Enter a note'
    }
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    }
  },
  components: {
    'input-component': inputComponent
  }
};

Vue.createApp(app).mount('#app');
