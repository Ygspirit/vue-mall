<template>
  <div id="cart">
    <cart-nav-bar />
    <cart-goods-list />
  </div>
</template>
<script>
import CartNavBar from "./childComps/CartNavBar";
import CartGoodsList from "./childComps/CartGoodsList";

export default {
  data() {
    return {};
  },
  components: {
    CartNavBar,
    CartGoodsList
  },
  created() {},
  methods: {}
};
</script>
<style></style>
