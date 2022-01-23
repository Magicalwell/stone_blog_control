<template>
  <div class="project-control">
    <h3
      style="
        line-height: 1.5;
        border-bottom: 2px solid #000;
        margin-bottom: 30px;
      "
    >
      项目管理
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
        <el-table-column prop="id" label="项目id" width="100">
        </el-table-column>
        <el-table-column prop="title" label="项目标题"> </el-table-column>
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
    <el-drawer :title="openproject.title" :visible.sync="drawer" size="65%">
      <div class="drawer-container">
        <el-input></el-input>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="openproject.introduction"
        >
        </el-input>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          title: "博客管理系统",
          author: "三石",
          tags: ["vue", "后台管理"],
          introduction: "哦哦哦哦这是测试哦\n哦哦哦哦",
        },
        {
          id: 2,
          title: "微前端",
          author: "三石",
          tags: ["vue", "后台管理"],
          introduction: "哈哈哈哈哈哈哈哈哈",
        },
      ],
      drawer: false,
      innerDrawer: false,
      editor: true,
      openproject: {},
    };
  },
  methods: {
    handleClick(item, Type) {
      if (item.id !== this.openproject.id) {
        this.openproject = this.deepCopy(item);
      }
      this.editor = Type;
      this.drawer = true;
    },
    formatTags(row, column, cellValue, index) {
      console.log(row, column, cellValue, index);
    },
    deepCopy(obj) {
      // 深拷贝
      if (typeof obj !== "object") return;
      var newObj = obj instanceof Array ? [] : {};
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          newObj[key] =
            typeof obj[key] === "object" ? this.deepCopy(obj[key]) : obj[key];
        }
      }
      return newObj;
    },
  },
};
</script>

<style lang="scss" scoped>
.project-control {
  padding: 30px 45px 20px 50px;
}
.tags {
  margin-right: 10px;
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
  display: inline-block;
  font-size: 12px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
}
.drawer-container {
  padding: 0 20px 20px 20px;
}
.control-btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>
