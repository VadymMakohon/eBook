import { createStore } from 'vuex';
import App from '@/App';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('App.vue', () => {
  let wrapper;
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      loading: () => { return false }
    }

    store = createStore({
      getters
    });

    wrapper = shallowMount(App, {
      global: {
        plugins: [store],
        stubs: ['router-link', 'router-view']
      },
    });
  });

  it("should display the current day's date", () => {
    const formattedDate = new Date().toDateString();
    expect(wrapper.html()).to.contain(formattedDate);
  });
});
