<template>
  <div class="detail-swiper">
    <swiper class="d-swiper">
      <swiper-item v-for="item in topImages" :key="item.id">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.d-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
