<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true,
      disableMouse: false,
      disableTouch: false,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }

    if (this.pullUpLoad) {
      // 监听上拉事件
      this.scroll.on("pullingUp", () => {
        console.log("监听滚动到底部");
        this.$emit("pullingUp");
      });
    }
  },
  created() {},
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    }
  },
  //监听数据变化后，重新渲染scroll
  watch: {}
};
</script>
<style></style>
