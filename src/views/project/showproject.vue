<template>
  <div class="project-show">
    <h3
      style="
        line-height: 1.5;
        border-bottom: 2px solid #000;
        margin-bottom: 30px;
      "
    >
      项目展示
    </h3>

    <div class="project-container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="container-items">
            <div class="items-img"></div>
            <div class="items-info"></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="container-items"></div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="container-items"></div>
        </el-col>
      </el-row>
    </div>
    <div class="project-show-footer" style="text-align: center">
      <el-pagination background layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.project-show {
  padding: 30px 45px 20px 50px;
}
.container-items {
  border: 1px solid #ebeef5;
  // margin: 0 10px 20px 10px;
  margin-bottom: 20px;
  height: 300px;
  display: flex;
  .items-img {
    width: 30%;
  }
  .items-info {
    flex: 1;
    background-color: khaki;
  }
}
</style>
