<template>
  <div id="detail-bottom-bar">
    <div class="left">
      <div class="customer-service">
        <span></span>
        <div>客服</div>
      </div>
      <div class="shop">
        <span></span>
        <div>店铺</div>
      </div>
      <div class="collection">
        <span></span>
        <div>收藏</div>
      </div>
    </div>
    <div class="right">
      <div @click="handleAddCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    handleAddCart() {
      this.$emit("handleAddCart");
    }
  }
};
</script>
<style scoped>
#detail-bottom-bar {
  height: 70px;
  background: #fff;

  margin-top: 12px;

  position: relative;
  /* bottom: 49px; */
}

.left,
.right {
  width: 50%;
  height: 58px;

  display: flex;
  align-items: center;
  text-align: center;

  margin-top: -12px;
}

.left {
  justify-content: space-around;
  font-size: 12px;
}

.customer-service span,
.shop span,
.collection span {
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-bottom: 2px;
  background-image: url("~assets/images/detail/detail_bottom.png");
  background-size: 100%;
}
.customer-service span {
  background-position: 0 -53px;
}
.shop span {
  background-position: 0 -98px;
}
.collection span {
  background-position: 0 0;
}

.right div {
  flex: 1;
  height: 58px;
  line-height: 58px;
}
.right div:nth-child(1) {
  background-color: #ffe817;
  color: #333;
}

.right div:nth-child(2) {
  background-color: #f69;
  color: #ffffff;
}
</style>
