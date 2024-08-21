const InputForm = { 
  template: `
    <div class="input-form">
      <form @submit="submitForm" class="ui form">
        <div class="field">
          <label>New Item</label>
          <input v-model="fields.newItem" type="text"
            placeholder="Add an item!" />
          <span style="float: right">{{ fields.newItem.length }}/20</span>
          <span style="color: red">{{ fieldErrors.newItem }}</span>
          <span v-if="isNewItemInputLimitExceeded"
            style="color: red; display: block">
            Must be under twenty characters
          </span>
        </div>
        <div class="field">
          <label>Email</label>
          <input v-model="fields.email" type="text"
            placeholder="What's your email?" />
          <span style="color: red">{{ fieldErrors.email }}</span>
        </div>
        <div class="field">
          <label>Urgency</label>
          <select v-model="fields.urgency" class="ui fluid search dropdown">
            <option disabled value="">Please select one</option>
            <option>Nonessential</option>
            <option>Moderate</option>
            <option>Urgent</option>
          </select>
          <span style="color: red">{{ fieldErrors.urgency }}</span>
          <span v-if="isNotUrgent"
            style="color: red; display: block">
            Must be moderate to urgent
          </span>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input v-model="fields.termsAndConditions" type="checkbox" />
            <label>I accept the terms and conditions</label>
            <span style="color: red">{{ fieldErrors.termsAndConditions }}</span>
          </div>
        </div>
        <button v-if="saveStatus === 'SAVING'"
          disabled class="ui button">
          Saving...
        </button>
        <button v-if="saveStatus === 'SUCCESS'"
          :disabled="isNewItemInputLimitExceeded || isNotUrgent"
          class="ui button">
          Saved! Submit another
        </button>
        <button v-if="saveStatus === 'ERROR'"
          :disabled="isNewItemInputLimitExceeded || isNotUrgent"
          class="ui button">
          Save Failed - Retry?
        </button>
        <button v-if="saveStatus === 'READY'"
          :disabled="isNewItemInputLimitExceeded || isNotUrgent"
          class="ui button">
          Submit
        </button>
      </form>
      <div class="ui segment">
        <h4 class="ui header">Items</h4>
        <ul>
          <div v-if="loading" class="ui active inline loader"></div>
          <li v-for="item in items" class="item">{{ item }}</li>
        </ul>
      </div>
    </div>`,
  data() {
    return {
      fields: {
        newItem: '',
        email: '',
        urgency: '',
        termsAndConditions: false
      },
      fieldErrors: {
        newItem: undefined,
        email: undefined,
        urgency: undefined,
        termsAndConditions: undefined
      },
      items: [],
      loading: false,
      saveStatus: 'READY'
    }
  },
  created() {
    this.loading = true,
    apiClient.loadItems().then((items) => {
      this.items = items;
      this.loading = false;
    });
  },
  computed: {
    isNewItemInputLimitExceeded() {
      return this.fields.newItem.length >= 20;
    },
    isNotUrgent() {
      return this.fields.urgency === 'Nonessential';
    }
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault();

      this.fieldErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldErrors).length) return;

      const items = [...this.items, this.fields.newItem];

      this.saveStatus = 'SAVING';
      apiClient.saveItems(items)
        .then(() => {
          this.items = items;
          this.fields.newItem = '';
          this.fields.email = '';
          this.fields.urgency = '';
          this.fields.termsAndConditions = false;
          this.saveStatus = 'SUCCESS';
        })
        .catch((err) => {
          console.log(err);
          this.saveStatus = 'ERROR';
        });
    },
    validateForm(fields) {
      const errors = {};
      if (!fields.newItem) errors.newItem = "New Item Required";
      if (!fields.email) errors.email = "Email Required";
      if (!fields.urgency) errors.urgency = "Urgency Required";
      if (!fields.termsAndConditions) {
        errors.termsAndConditions = "Terms and conditions have to be approved";
      }

      if (fields.email && !this.isEmail(fields.email)) {
        errors.email = "Invalid Email";
      }

      return errors;
    },
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }
}

let apiClient = {
  loadItems: function () {
    return {
      then: function (cb) {
        setTimeout(() => {
          cb(JSON.parse(localStorage.items || '[]'));
        }, 1000);
      },
    };
  },

  saveItems: function (items) {
    const success = !!(this.count++ % 2);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.items = JSON.stringify(items);
        return resolve({ success });
      }, 1000);
    });
  },

  count: 1,
}

Vue.createApp({
  components: {
    'input-form': InputForm
  }
}).mount('#app')
