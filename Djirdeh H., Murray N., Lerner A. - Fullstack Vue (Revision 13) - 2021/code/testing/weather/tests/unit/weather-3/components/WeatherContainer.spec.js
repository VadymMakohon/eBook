import { createStore } from 'vuex';
import WeatherContainer from '@/components/WeatherContainer';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import sinon from 'sinon';

describe('WeatherContainer.vue', () => {
  let wrapper;
  let getters;
  let actions;
  let store;

  const setUpWrapper = loading => {
    getters = {
      location: () => 'New York',
      weatherDescription: () => 'Light Cloud',
      imageAbbr: () => 'lc.png',
      weatherTemp: () => -10.0,
      loading: () => loading
    }

    actions = {
      fetchWeather: sinon.stub()
    }

    store = createStore({
      getters,
      actions
    });

    wrapper = shallowMount(WeatherContainer, {
      global: {
        plugins: [store]
      },
    });
  };

  it('should render the correct content when the app is loading', () => {
    setUpWrapper(true);

    expect(
      wrapper.html()
    ).to.contain('<div class="loader"></div>');
    expect(
      wrapper.html()
    ).to.not.contain('<h1 class="subtitle weather__city">New York</h1>');
    expect(
      wrapper.html()
    ).to.not.contain('<p class="weather__description">Light Cloud</p>');
    expect(
      wrapper.html()
    ).to.not.contain('<p class="weather__temperature">-10 ºC</p></div>');
  });

  it('should render the correct content when the app is not loading', () => {
    setUpWrapper(false);

    expect(
      wrapper.html()
    ).to.contain('<h1 class="subtitle weather__city">New York</h1>');
    expect(
      wrapper.html()
    ).to.contain('<p class="weather__description">Light Cloud</p>');
    expect(
      wrapper.html()
    ).to.contain('<p class="weather__temperature">-10 ºC</p></div>');
    expect(
      wrapper.html()
    ).to.not.contain('<div class="loader"></div>');
  });
});
