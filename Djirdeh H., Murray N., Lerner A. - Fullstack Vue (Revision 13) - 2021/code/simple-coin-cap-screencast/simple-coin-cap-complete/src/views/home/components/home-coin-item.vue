<template>
  <div class="ui segment coin desktop">
    <router-link :to="'/currency/' + coin.website_slug" class="ui grid">
      <div class="one wide column segment__bold">{{coin.rank}}</div>
      <div class="two wide column segment__primary">
        <img :src="`https://chasing-coins.com/api/v1/std/logo/${coin.symbol}`" class="segment__crypto-logo">
        {{coin.name}}
      </div>
      <div class="one wide column segment__bold">{{coin.symbol}}</div>
      <div class="three wide column segment__bold">{{formatCurrency(coinQuotes.market_cap)}}</div>
      <div class="two wide column segment__primary">{{formatCurrency(coinQuotes.price)}}</div>
      <div class="three wide column segment__primary">{{formatNumber(coin.circulating_supply)}} {{coin.symbol}}</div>
      <div
        class="two wide column"
        :class="[isValuePositive(coinQuotes.percent_change_1h) ? 'segment__positive' : 'segment__negative']">
        {{coinQuotes.percent_change_1h}} %
      </div>
      <div
        class="two wide column"
        :class="[isValuePositive(coinQuotes.percent_change_24h) ? 'segment__positive' : 'segment__negative']">
        {{coinQuotes.percent_change_24h}} %
      </div>
    </router-link>
  </div>
</template>

<script>
import utils from '@/utils';

export default {
  name: 'HomeCoinItem',
  props: {
    coin: Object,
    coinQuotes: Object
  },
  created() {
    this.formatCurrency = utils.formatCurrency;
    this.formatNumber = utils.formatNumber;
    this.isValuePositive = utils.isValuePositive;
  }
}
</script>

<style src="@/assets/styles/home-coin-item.css">
</style>
