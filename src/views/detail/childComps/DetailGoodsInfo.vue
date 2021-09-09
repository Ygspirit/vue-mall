<template>
  <div id="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="handleGoodsImg"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      goodsImgLength: 0,
      listLength: 0
    };
  },
  created() {},
  methods: {
    handleGoodsImg() {
      this.goodsImgLength++;
      if (this.goodsImgLength === this.detailInfo.detailImage[0].list.length) {
        this.$emit("handleGoodsImg");
      }
    }
  }
};
</script>
<style>
#detail-goods-info {
  border-bottom: 5px solid #eaeaea;
}
.info-desc {
  padding: 20px 10px;
}
.start,
.end {
  position: relative;
  width: 6px;
  height: 6px;
  background-color: #222222;
}

.start::after,
.end::after {
  content: "";
  position: absolute;
  top: 100%;
  width: 100px;
  height: 2px;
  background-color: #c3c4c4;
  transform: translateY(-100%);
}

.start::after {
  left: 100%;
}

.end {
  float: right;
}

.end::after {
  right: 100%;
}

.desc {
  margin: 20px 0;
}

.info-key {
  padding: 10px;
  color: #333333;
}
.info-list img {
  width: 100%;
}
</style>
