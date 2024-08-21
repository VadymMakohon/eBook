import { createStore } from 'vuex';
import App from '@/App';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('App.vue', () => {
  let wrapper;
  let store;
  let getters;

  const setUpWrapper = loading => {
    getters = {
      loading: () => {
        return loading;
      }
    };

    store = createStore({
      getters
    });

    wrapper = shallowMount(App, {
      global: {
        plugins: [store],
        stubs: ['router-link', 'router-view']
      },
    });
  };

  it("should display the current day's date", () => {
    setUpWrapper(false);

    const formattedDate = new Date().toDateString();
    expect(wrapper.html()).to.contain(formattedDate);
  });

  it('should display the footer links when application is not loading', () => {
    setUpWrapper(false);
    const footerLinks = wrapper.find('.app__cities');

    expect(footerLinks.html()).to.contain(
      '<router-link-stub to="/weather/2459115"></router-link-stub>'
    );
    expect(footerLinks.html()).to.contain(
      '<router-link-stub to="/weather/468739"></router-link-stub>'
    );
    expect(footerLinks.html()).to.contain(
      '<router-link-stub to="/weather/2122265"></router-link-stub>'
    );
    expect(footerLinks.html()).to.contain(
      '<router-link-stub to="/weather/1118370"></router-link-stub>'
    );
    expect(footerLinks.html()).to.contain(
      '<router-link-stub to="/weather/1105779"></router-link-stub>'
    );
    expect(footerLinks.html()).to.contain(
      '<router-link-stub to="/weather/1398823"></router-link-stub>'
    );
  });

  it('should not display footer links when application is loading', () => {
    setUpWrapper(true);
    const footerLinks = wrapper.find('.app__cities');

    expect(wrapper).to.not.contain(footerLinks);
  });
});
