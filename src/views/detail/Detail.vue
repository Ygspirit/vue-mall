<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods-info="goodsInfo"></detail-base-info>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import { getDetail, GoodsInfo } from "network/detail";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {}
    };
  },
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      console.log(res);
      // 获取轮播图
      this.topImages = data.itemInfo.topImages;
      // 获取商品数据
      this.goodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo
      );
    });
  },
  methods: {}
};
</script>
<style></style>
