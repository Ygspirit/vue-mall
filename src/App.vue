<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <main-tab-bar v-if="!$route.meta.tabNotShow"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  components: {
    MainTabBar
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style>
@import "assets/css/base.css";
</style>
