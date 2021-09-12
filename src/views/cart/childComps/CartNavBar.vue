<template>
  <div id="cart-nav-bar">
    <nav-bar class="cart-nav">
      <template v-slot:center>
        <div>购物车({{ cartLength }})</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
};
</script>
<style scoped>
#cart-nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
