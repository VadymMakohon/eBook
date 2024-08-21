import { createApp } from 'vue';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './app-complete/App.vue';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/api',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app');
