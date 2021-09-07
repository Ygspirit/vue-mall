<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods-info="goodsInfo"></detail-base-info>
    <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import { getDetail, GoodsInfo, ShopInfo } from "network/detail";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {}
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
      // 创建店铺信息
      this.shopInfo = new ShopInfo(data.shopInfo);
    });
  },
  methods: {}
};
</script>
<style>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>
