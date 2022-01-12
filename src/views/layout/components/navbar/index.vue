<template>
  <div class="navbar-container">
    <slot name="switchbtn"></slot>
    <bread-Crumb></bread-Crumb>
    <div class="navbar-right">
      <template> 777888 </template>
      <el-dropdown class="user-zone">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >螺蛳粉</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >蚵仔煎</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import breadCrumb from "@/components/breadCrumb/breadcrumb.vue";
export default {
  components: {
    breadCrumb,
  },
};
</script>

<style lang="scss" scoped>
.navbar-container {
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.navbar-right {
  float: right;
  height: 100%;
  line-height: 50px;
}
.user-zone {
  padding-right: 20px;
  margin-left: 10px;
}
</style>
