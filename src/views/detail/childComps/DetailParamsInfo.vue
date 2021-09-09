<template>
  <div id="detail-params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table
      v-for="(table, index) in paramsInfo.tables"
      :key="index"
      class="tables"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>

    <table class="set">
      <tr v-for="(tr, index) in paramsInfo.set" :key="index">
        <td>
          {{ tr.key }}
        </td>
        <td>
          {{ tr.value }}
        </td>
      </tr>
    </table>

    <img :src="paramsInfo.img" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
#detail-params-info {
  padding: 20px 10px;
  border-bottom: 5px solid #eaeaea;
  font-size: 14px;
}
.tables,
.set {
  width: 100%;
}

.tables td,
.set td {
  border-bottom: 1px solid #eaeaea;
}

.tables tr td,
.set tr td {
  padding: 15px 0;
}

.tables tr {
  display: flex;
  text-align: left;
}
.tables tr td {
  flex: 1;
}

.set tr td:nth-child(1) {
  width: 95px;
}

.set tr td:nth-last-child(1) {
  color: #eb4868;
}
</style>
