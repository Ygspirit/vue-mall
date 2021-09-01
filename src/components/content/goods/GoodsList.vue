<template>
  <div class="goods-list">
    <goods-list-item
      v-for="item in goods"
      :key="item.id"
      :goodsItem="item"
    ></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 0 4px;
}
</style>
