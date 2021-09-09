<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="wrapper" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods-info="goodsInfo" />
      <detail-shop-info :shop-info="shopInfo" @loadlogo="loadlogo" />
      <detail-goods-info
        :detail-info="detailInfo"
        @handleGoodsImg="handleGoodsImg"
      />
      <detail-params-info :params-info="paramsInfo" />
      <detail-comment-info :comment-info="commentInfo" />
      <detail-recommend-info :recommend-info="recommendInfo" />
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, GoodsInfo, ShopInfo, ParamsInfo, getRecommend} from "network/detail";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: []
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
      // 保存商品的详细数据
      this.detailInfo = data.detailInfo;
      // 保存参数信息
      this.paramsInfo = new ParamsInfo(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 保存用户评价
      this.commentInfo = data.rate.list[0];
    });
    // 保存推荐商品数据
    getRecommend().then(res => {
      this.recommendInfo = res.data.list;
      console.log(res);
    });
  },
  methods: {
    loadlogo() {
      this.$refs.scroll.refresh();
    },
    handleGoodsImg() {
      this.$refs.scroll.refresh();
      // this.scrollPosition[0] = 0;
      // this.scrollPosition[1] = this.$refs.params.$el.offsetTop;
      // this.scrollPosition[2] = this.$refs.comment.$el.offsetTop;
      // this.scrollPosition[3] = this.$refs.recommend.$el.offsetTop;
      // this.scrollPosition[4] = Number.MAX_VALUE;
    }
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.wrapper {
  height: calc(100% - 44px);
}
</style>
