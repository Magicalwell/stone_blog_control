<template>
  <div class="doc-container">
    <h3 style="line-height: 1.5; border-bottom: 2px solid #000">管理文章</h3>
    <div class="doc-searchOption">
      <div class="inline-block">
        <label for class="search-label">文章id：</label>
        <el-input placeholder="id"></el-input>
      </div>
    </div>
    <div class="doc-list">
      <el-table :data="tableData" style="width: 100%" stripe max-height="850">
        <el-table-column type="index" label="序号" width="70">
        </el-table-column>
        <el-table-column prop="id" label="id" width="100"> </el-table-column>
        <el-table-column prop="title" label="文章标题"> </el-table-column>
        <el-table-column prop="createTime" label="创建时间"> </el-table-column>
        <el-table-column prop="editTime" label="编辑时间"> </el-table-column>
        <el-table-column prop="docTags" label="文章标签"> </el-table-column>
        <el-table-column prop="author" label="作者" width="200">
        </el-table-column>
        <el-table-column prop="docType" label="文章类型" width="100">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentpage"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 10001,
          title: "测试回显",
          createTime: "2022-01-20",
          editTime: "2022-01-20",
          author: "三石",
          docType: "3",
        },
        {
          id: 10002,
          title: "测试回显2",
          createTime: "2022-01-20",
          editTime: "2022-01-20",
          author: "三石",
          docType: "4",
          docTags: ["2", "3"],
        },
        {
          id: 10002,
          title: "测试回显2",
          createTime: "2022-01-20",
          editTime: "2022-01-20",
          author: "三石",
          docType: "4",
          docTags: ["2", "3"],
        },
        {
          id: 10002,
          title: "测试回显2",
          createTime: "2022-01-20",
          editTime: "2022-01-20",
          author: "三石",
          docType: "4",
          docTags: ["2", "3"],
        },
        {
          id: 10002,
          title: "测试回显2",
          createTime: "2022-01-20",
          editTime: "2022-01-20",
          author: "三石",
          docType: "4",
          docTags: ["2", "3"],
        },
      ],
      currentpage: 1,
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
  },
};
</script>

<style lang="scss" scoped>
.search-label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 8px 0 0;
  box-sizing: border-box;
}
.inline-block {
  margin: 30px 50px 0 0;
  display: inline-block;
  ::v-deep.el-input {
    display: inline-block;
    width: 202px;
  }
  // ::v-deep.el-form-item__content {
  //   display: inline-block;
  //   width: 202px;
  // }
}
.block {
  margin: 30px 50px 0 0;
  ::v-deep.el-form-item__content {
    display: inline-block;
  }
}
.doc-container {
  padding: 30px 45px 20px 50px;
}
.doc-list {
  margin: 30px 0;
}
</style>
