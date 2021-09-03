<template>
  <div id="detail-base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-title">{{ goodsInfo.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goodsInfo.Newprice }}</span>
      <span class="o-price">{{ goodsInfo.oldPrice }}</span>
      <span v-if="goodsInfo.discountDesc" class="discount-desc">
        {{ goodsInfo.discountDesc }}
      </span>
    </div>
    <div class="info-other">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goodsInfo.services.length - 1"
        :key="index"
      >
        <img :src="goodsInfo.services[index - 1].icon" alt="" />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsInfo: {
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
  methods: {}
};
</script>
<style scoped>
#detail-base-info {
  padding: 20px 0 0;
  border-bottom: 4px solid #eaeaea;
  font-size: 13px;
}
.info-title,
.info-price,
.info-other,
.info-service {
  padding: 0 10px;
}

.info-title {
  font-size: 16px;
  color: #222222;
}
.info-price {
  margin: 10px 0 0;
}
.info-price .n-price {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-high-text);
}
.info-price .o-price {
  margin: 0 8px;
  text-decoration: line-through;
}
.discount-desc {
  position: relative;
  background-color: var(--color-tint);
  font-size: 5px;
  color: #ffffff;

  padding: 3px 4px;
  border-radius: 10px;
  top: -5px;
}
.info-other,
.info-service {
  display: flex;
  justify-content: space-between;
}
.info-other {
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
}
.info-service {
  padding: 15px 10px;
  color: #222222;
}
.info-service img {
  width: 15px;
  vertical-align: middle;
}
</style>
