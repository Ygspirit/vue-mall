<template>
  <div class="detail-recommend-info">
    <div class="text">热门推荐</div>
    <goods-list :goods="recommendInfo" />
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList";

export default {
  props: {
    recommendInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsList
  }
};
</script>
<style scoped>
.text {
  padding: 15px 10px;
  color: #222222;
}
</style>
