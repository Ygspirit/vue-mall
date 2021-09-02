<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
    <tab-control
      class="tab-control-fixed"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  unmounted() {
    console.log("home destroyed");
  },
  activated() {
    // 回到home，保持home离开时的位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },

  deactivated() {
    // 记录hone离开的位置
    this.saveY = this.$refs.scroll.scroll.y;
  },

  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 监听item中图片加载完成
  },
  mounted() {},
  watch: {
    // 监听图片加载完成的状态
    "$store.state.count"() {
      this.$refs.scroll.refresh();
    }
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听滚动的位置,判断是否隐藏backtop
    contentScroll(position) {
      // 判断backtop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 决定tabcontrol是否吸顶(position：fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoad() {
      // 获取tabControl的offsetTop
      // 所有的组件都有一个属性$el，用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        // 存储请求到的数据
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },

    // 防抖函数
    debounce(fun, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fun.apply(this, args);
        }, delay);
      };
    }
  }
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  
  /* 固定nav的位置 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/* tab-control移到某个位置后,position的值自动成fixed*/
/* #home .tab-control {
  position: sticky;
  top: 44px;
} */

.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control-fixed {
  position: relative;
  z-index: 9;
}
/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 9;
} */
/* .wrapper {
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
