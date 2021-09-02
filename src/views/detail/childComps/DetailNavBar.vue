<template>
  <div id="detail-nav-bar">
    <nav-bar class="detail-nav-bar">
      <template v-slot:left>
        <div @click="backClick">
          <img src="~assets\images\common\back.svg" alt="" />
        </div>
      </template>

      <template v-slot:center>
        <div
          v-for="(item, index) in titles"
          :key="item.id"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  created() {},
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>
<style>
.center {
  display: flex;
}
.left {
  margin-top: 12px;
}

.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>
