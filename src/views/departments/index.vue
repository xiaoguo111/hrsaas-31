<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="less"></style>
