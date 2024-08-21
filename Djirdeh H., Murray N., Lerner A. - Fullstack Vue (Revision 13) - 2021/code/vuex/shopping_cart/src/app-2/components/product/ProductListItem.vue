<template>
  <div>
    <h2 class="has-text-weight-bold">{{ productItem.title }}
      <span class="tag
          is-primary
          is-pulled-right
          has-text-white">
        Add to Cart
      </span>
    </h2>
    <p>{{ productItem.description }}</p>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-usd"></i> {{ productItem.price }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: ['productItem']
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}
</style>
