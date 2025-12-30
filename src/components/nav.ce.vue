<script lang="ts" setup>
import { ElAffix } from "element-plus";
</script>
<template>
  <el-affix :offset="0">
    <div>1</div>
  </el-affix>
  <div
    class="relative"
    style="
      overflow-y: auto;
      background: #f00;
      height: 600px;
      position: relative;
      margin-top: 200px;
    "
  >
    <el-affix :offset="200">
      <div>2</div>
    </el-affix>
    <div style="height: 1900px"></div>
  </div>
</template>
<style>
@import url("element-plus/theme-chalk/base.css");
@import url("element-plus/theme-chalk/el-affix.css");
</style>
