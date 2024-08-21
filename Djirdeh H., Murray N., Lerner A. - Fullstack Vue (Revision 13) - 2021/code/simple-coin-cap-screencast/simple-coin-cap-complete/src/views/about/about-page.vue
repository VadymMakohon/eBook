<template>
  <div class="ui grid about">
		<h1 class="ui header">SimpleCoinCap</h1>
		<div class="content">
			<p>SimpleCoinCap displays market cap rankings, price, details and more for the top 
			100 largest cryptocurrencies based on overall market cap. Built with
      <a href="https://vuejs.org/" target="_blank">Vue</a>, <a href="https://router.vuejs.org/en/" target="_blank">Vue Router</a>,
      <a href="https://vuex.vuejs.org/en/" target="_blank">Vuex</a>, and deployed on <a href="https://www.heroku.com/" target="_blank">Heroku</a>;
      this app was built as a <strong>Screencast Tutorial</strong> as part of the enhanced package of
      <a href="https://www.fullstack.io/vue/" target="_blank">Fullstack Vue: The Complete Guide to Vue.js</a>.</p>

			<img class="content__book-img" :src="bookCover" />

			<p>
				Cryptocurrency data obtained from the <a href="https://coinmarketcap.com/api/" target="_blank">Coinmarketcap API</a>.
        Cryptocurrency logo images obtained from the <a href="https://chasing-coins.com/api" target="_blank">Chasing Coins API</a>.
				Design loosely inspired by <a href="https://dribbble.com/shots/4375541-Crypto-Market" target="_blank">Mark Henry</a>.
				Favicon created by <a href="https://thenounproject.com/habanerodesigns/" target="_blank">Grant Taylor</a>.
			</p>
		</div>
	</div>
</template>

<script>
import bookCover from '@/assets/book-cover.png';

export default {
  name: 'AboutPage',
  data() {
    return {
      bookCover
    }
  }
}
</script>

<style src="@/assets/styles/about-page.css">
</style>
