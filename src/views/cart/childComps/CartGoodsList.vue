<template>
  <div id="cart-goods-list">
    <scroll class="cart-scroll" ref="scroll">
      <cart-goods-list-item
        v-for="item in cartGoodsList"
        :goods-item="item"
        :key="item.id"
      />
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";

import CartGoodsListItem from "./CartGoodsListItem";

export default {
  data() {
    return {};
  },
  components: {
    Scroll,
    CartGoodsListItem
  },
  created() {},
  computed: {
    ...mapGetters(["cartGoodsList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {}
};
</script>

<style>
#cart-goods-list {
  height: calc(100vh - 44px - 49px);
}
.cart-scroll {
  height: 100%;
  overflow: hidden;
}
</style>
