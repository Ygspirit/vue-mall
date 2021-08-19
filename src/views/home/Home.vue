<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends='recommend'></recommend-view>
    <feature-view></feature-view>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import { getHomeMultidata } from "network/home";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from 'views/home/childComps/FeatureView'

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommend: []
    };
  },

  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      // 存储请求到的数据
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
  methods: {}
};
</script>
<style>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>
