<template>
  <div class="power-role">
    <h3
      style="
        line-height: 1.5;
        border-bottom: 2px solid #000;
        margin-bottom: 30px;
      "
    >
      角色权限
    </h3>
    <div class="control-btn">
      <el-button-group>
        <el-button type="primary" icon="el-icon-search"></el-button>
        <el-button type="primary" icon="el-icon-refresh-right"></el-button>
      </el-button-group>
      <el-button type="primary" style="margin-left: 10px"> 新增 </el-button>
    </div>
    <div class="container">
      <el-table :data="tableData" style="width: 100%" stripe max-height="850">
        <el-table-column type="index" label="序号" width="70">
        </el-table-column>
        <el-table-column prop="id" label="账号id" width="100">
        </el-table-column>
        <el-table-column prop="account" label="账户"> </el-table-column>
        <el-table-column prop="globelimg" label="缩略图" width="150">
        </el-table-column>
        <el-table-column prop="author" label="作者" width="200">
        </el-table-column>
        <el-table-column prop="tags" label="项目标签" width="350">
          <template slot-scope="scope">
            <span
              v-for="(item, index) in scope.row.tags"
              :key="index"
              class="tags"
            >
              {{ item }}
            </span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row, true)"
              type="text"
              size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.power-role {
  padding: 30px 45px 20px 50px;
}
</style>
