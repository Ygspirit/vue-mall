<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods-info="goodsInfo" />
      <detail-shop-info :shop-info="shopInfo" @loadlogo="loadlogo" />
      <detail-goods-info
        :detail-info="detailInfo"
        @handleGoodsImg="handleGoodsImg"
      />
      <detail-params-info :params-info="paramsInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <detail-recommend-info :recommend-info="recommendInfo" ref="recommend" />
    </scroll>
    <back-top @click="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @handleAddCart="handleAddCart" />
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
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

// import { backTopMixin } from "common/mixin";

import {
  getDetail,
  GoodsInfo,
  ShopInfo,
  ParamsInfo,
  getRecommend
} from "network/detail";

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
    DetailBottomBar,
    Scroll,
    BackTop
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
      recommendInfo: [],
      // 主题内容的位置
      themeTopYs: [],
      currentIndex: 0,
      isShowBackTop: false
    };
  },
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    this.getDetail();

    // 保存推荐商品数据
    this.getRecommend();
  },
  // mixins: [backTopMixin],
  methods: {
    /**
     * 事件监听相关的方法
     */
    loadlogo() {
      this.$refs.scroll.refresh();
    },
    handleGoodsImg() {
      this.$refs.scroll.refresh();

      //
      this.themeTopYs[0] = 0;
      this.themeTopYs[1] = this.$refs.params.$el.offsetTop;
      this.themeTopYs[2] = this.$refs.comment.$el.offsetTop;
      this.themeTopYs[3] = this.$refs.recommend.$el.offsetTop;
      this.themeTopYs[4] = Number.MAX_VALUE;
      // console.log(this.themeTopYs);
    },
    // 监听navbar点击
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 400);
    },
    // 监听Bscroll滚动
    contentScroll(position) {
      // 获取y值
      const positionY = -position.y;

      let length = this.themeTopYs.length;

      // positionY和主题中值进行对比
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY <= this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;

          // console.log(this.currentIndex);
        }
      }
      // console.log(this.$refs.nav.currentIndex);
      // 决定 返回顶部的按钮 是否显示
      this.isShowBackTop = -position.y > 1000;
    },
    // 监听 返回顶部按钮
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听添加购物车
    handleAddCart() {
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.detailInfo.desc;
      product.price = this.goodsInfo.Newprice;
      product.iid == this.iid;

      // 2.将商品添加到购物车里
      this.$store.commit("addCart", product);
    },

    /**
     * 网络请求相关的方法
     */
    getDetail() {
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
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommendInfo = res.data.list;
        console.log(res);
      });
    }
  },
  watch: {
    // 监听图片加载完成的状态
    "$store.state.count"() {
      this.$refs.scroll.refresh();
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
  height: calc(100% - 44px - 58px);
  position: relative;
  overflow: hidden;
}
</style>
