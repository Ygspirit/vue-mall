<template>
  <div id="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="top">
      <img :src="shopInfo.logo" alt="" @load="loadlogo"/>
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="center">
      <div class="center-left">
        <div class="center-left-cSells">
          <span> {{ rounding(shopInfo.cSells) }}万 </span>
          <span>总销量</span>
        </div>
        <div class="center-left-cGoods">
          <span> {{ shopInfo.cGoods }}</span>
          <span>全部宝贝</span>
        </div>
      </div>

      <div class="center-right">
        <div v-for="item in shopInfo.score" :key="item.id" class="score">
          <span class="item-name">{{ item.name }}</span>
          <span
            :style="{ color: item.isBetter ? '#f13e3a' : '#5ea732' }"
            class="grade"
          >
            {{ item.score }}
          </span>
          <div class="grade-text" :class="{ bgc: item.isBetter }">
            <span v-if="item.isBetter">高</span>
            <span v-else>低</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    rounding(cSells) {
      return (cSells / 10000).toFixed(1);
    },
    loadlogo(){
      this.$emit('loadlogo')
    }
  }
};
</script>
<style scoped>
#detail-shop-info {
  padding: 20px 0 10px 0;
  border-bottom: 5px solid #eaeaea;
}
.top,
.center,
.bottom {
  padding: 0 10px;
}
.top img {
  width: 40px;
  margin-right: 10px;
  vertical-align: middle;
}

.center {
  margin: 30px 0 20px 0;
  color: #222222;
  font-size: 13px;
  font-weight: bold;
}

.center-left {
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  height: 45px;
  border-right: 2px solid #eaeaea;
}

.center-left-cSells :first-child,
.center-left-cGoods :first-child {
  font-size: 20px;
  padding-bottom: 10px;
}

.center-left-cSells span,
.center-left-cGoods span {
  display: block;
  text-align: center;
}

.center-right {
  width: 50%;
  text-align: left;
  padding-left: 30px;
  margin-top: -10px;
}
.score {
  margin-bottom: 10px;
}
.grade {
  display: inline-block;
  width: 25px;
  margin: 0 15px;
}
.grade-text {
  display: inline-block;
  background-color: #5ea732;
  color: #ffffff;
  font-weight: normal;
}
.bgc {
  background-color: #f13e3a;
}

.bottom {
  text-align: center;
  margin: 30px 0;
  font-size: 15px;
}

.bottom span {
  padding: 10px 35px;
  border-radius: 10px;
  background-color: #eeeeee;
}
</style>
