<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <ul>
      <li class="cart-item">
        <div>
          <p class="cart-item--title is-inline">The Fullstack Hoodie</p>
          <div class="is-pulled-right">
            <i class="fa fa-arrow-circle-up cart-item--modify"></i>
            <i class="fa fa-arrow-circle-down cart-item--modify"></i>
          </div>
          <div class="cart-item--content">
            <span class="cart-item--price
                has-text-primary
                has-text-weight-bold">
              19.99$ each
            </span>
            <span class="cart-item--quantity
                has-text-grey
                is-pulled-right">
              Quantity: 2
            </span>
          </div>
        </div>
      </li>
      <div class="cart-details">
        <p>Total Quantity: <span class="has-text-weight-bold">2</span></p>
        <p class="cart-remove-all--text">
          <i class="fa fa-trash"></i>Remove all
        </p>
      </div>
    </ul>
    <button class="button is-primary">
      Checkout (<span class="has-text-weight-bold">$</span>)
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartList',
}
</script>

<style scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}
</style>
