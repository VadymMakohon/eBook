<template>
  <div>
    <!-- Desktop -->
    <div class="ui segment coin desktop">
      <router-link :to="'/currency/' + coin.slug" class="ui grid">
        <div class="one wide column segment__bold">{{coin.cmc_rank}}</div>
        <div class="two wide column segment__primary">
          <img :src="virtualCurrencyImageSmall" class="segment__crypto-logo">
          {{coin.name}}
        </div>
        <div class="one wide column segment__bold">{{coin.symbol}}</div>
        <div class="three wide column segment__bold">{{formatCurrency(coinQuote.market_cap)}}</div>
        <div class="two wide column segment__primary">{{formatCurrency(coinQuote.price)}}</div>
        <div class="three wide column segment__primary">{{formatNumber(coin.circulating_supply)}} {{coin.symbol}}</div>
        <div
          class="two wide column"
          :class="[isValuePositive(coinQuote.percent_change_1h) ? 'segment__positive' : 'segment__negative']">
          {{formatNumber(coinQuote.percent_change_1h)}} %
        </div>
        <div
          class="two wide column"
          :class="[isValuePositive(coinQuote.percent_change_24h) ? 'segment__positive' : 'segment__negative']">
          {{formatNumber(coinQuote.percent_change_24h)}} %
        </div>
      </router-link>
    </div>

    <!-- Mobile/Tablet -->
    <div class="ui segment coin non-desktop">
      <router-link :to="'currency/' + coin.slug" class="ui grid">
        <div class="two wide column segment__bold">{{coin.rank}}</div>
        <div class="five wide column segment__primary">
          <img :src="virtualCurrencyImageSmall" class="segment__crypto-logo">
          {{coin.name}}
        </div>
        <div class="five wide column segment__primary">{{formatCurrency(coinQuote.price)}}</div>
        <div class="three wide column"
          :class="[isValuePositive(coinQuote.percent_change_24h) ? 'segment__positive' : 'segment__negative']">
          {{coinQuote.percent_change_24h}}%
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import utils from '@/utils';
import virtualCurrencyImageSmall from '@/assets/virtual-currency-small.png';

export default {
  name: 'HomeCoinItem',
  props: {
    coin: Object,
    coinQuote: Object
  },
  data() {
    return {
      virtualCurrencyImageSmall
    }
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
