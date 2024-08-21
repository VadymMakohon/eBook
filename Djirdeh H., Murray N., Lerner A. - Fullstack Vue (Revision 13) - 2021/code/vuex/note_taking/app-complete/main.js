const state = {
  notes: [],
  timestamps: []
}

const mutations = {
  ADD_NOTE (state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP (state, payload) {
    let newTimeStamp = payload;
    state.timestamps.push(newTimeStamp);
  }
}

const actions = {
  addNote (context, payload) {
    context.commit('ADD_NOTE', payload);
  },
  addTimestamp (context, payload) {
    context.commit('ADD_TIMESTAMP', payload);
  }
}

const getters = {
  getNotes: state => state.notes,
  getTimestamps: state => state.timestamps,
  getNoteCount: state => state.notes.length
}

const store = Vuex.createStore({
  state,
  mutations,
  actions,
  getters
})

const inputComponent = {
  template: `<input
      placeholder='Enter a note'
      v-model="input"
      @keyup.enter="monitorEnterKey"
      class="input is-small" type="text" />`,
  data () {
    return {
      input: '',
    }
  },
  methods: {
    monitorEnterKey () {
      this.$store.dispatch('addNote', this.input);
      this.$store.dispatch('addTimestamp', new Date().toLocaleString());
      this.input = '';
    }
  }
}

const noteCountComponent = {
  template:
    `<div class="note-count">
      Note count: <strong>{{ noteCount }}</strong>
    </div>`,
  computed: {
    noteCount() {
      return this.$store.getters.getNoteCount;
    }
  }
}

const app = Vue.createApp({
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    },
    timestamps() {
      return this.$store.getters.getTimestamps;
    }
  },
  components: {
    'input-component': inputComponent,
    'note-count-component': noteCountComponent
  }
})

app.use(store)
app.mount('#app')
