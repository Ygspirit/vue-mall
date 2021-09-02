<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  align-items: center;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  flex: 0.16;
  /* background: red; */
}
.center {
  flex: 0.84;
  /* background: blue; */
}
</style>
