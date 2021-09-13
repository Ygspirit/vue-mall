<template>
  <div id="cart-goods-list-item">
      {{goodsItem}}
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
      
  }
};
</script>
<style></style>
