<template>
  <div id="cart-goods-list">
    <scroll class="cart-scroll" ref="scroll">
    <li v-for="item in cartGoodsList" :key="item.id">{{item}}</li>
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import Scroll from "components/common/scroll/Scroll";


export default {
  data() {
    return {};
  },
  components: {
      Scroll
  },
  created() {},
  computed: {
    ...mapGetters(["cartGoodsList"])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  methods: {}
};
</script>

<style>
.cart-scroll{
    
}
</style>
