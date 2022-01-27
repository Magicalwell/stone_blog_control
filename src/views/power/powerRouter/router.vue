<template>
  <div class="power-router">
    <h3
      style="
        line-height: 1.5;
        border-bottom: 2px solid #000;
        margin-bottom: 30px;
      "
    >
      路由权限
    </h3>
    这里设置路由，包括新增，路径的设置以及路由中一些方法对应的op
    <div class="router-select-container" style="margin-bottom: 20px">
      <div class="inline-block" style="margin-right: 20px">
        <label for class="search-label">手机号：</label>
        <el-select v-model="selectOptions" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.systemId"
            :label="item.title"
            :value="item.systemId"
          >
          </el-option>
        </el-select>
      </div>
      <el-button type="primary">新增路由</el-button
      ><small>功能待确定是否需要独立出来</small>
    </div>
    <div class="router-container">
      <small
        >路由管理页面暂时做成table的形式，考虑要不要做成与公司一致的形式，如果做成后者，需要引入自己的组件库并新增右键菜单指令;暂时只对父节点支持新增子节点的功能，也就是二级路由，后续如果要支持子级加路由</small
      >
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="path"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        :row-class-name="sonoftree"
      >
        <el-table-column type="index" label="序号" width="70">
        </el-table-column>
        <el-table-column prop="path" label="路径path" width="280">
        </el-table-column>
        <el-table-column prop="name" label="路由name" width="280">
        </el-table-column>
        <el-table-column prop="meta.title" label="菜单名称" width="180">
        </el-table-column>
        <el-table-column label="菜单图标" width="180">
          <template slot-scope="scope">
            {{ scope.row.meta.icon ? scope.row.meta.icon : "无图标" }}
          </template>
        </el-table-column>
        <el-table-column label="节点等级" width="180">
          <template slot-scope="scope">
            {{ scope.row.children ? "父级路由" : "子路由" }}
          </template>
        </el-table-column>
        <el-table-column prop="redirect" label="重定向" width="200">
          <template slot-scope="scope">
            {{ scope.row.redirect ? scope.row.redirect : "否" }}
          </template>
        </el-table-column>
        <el-table-column label="页面权限列表" width="250">
          <template slot-scope="scope">
            <span
              v-for="(item, index) in scope.row.oplist"
              :key="index"
              class="tags"
            >
              {{ item }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="180">
          <!-- <template slot-scope="scope" v-if="scope.row.children">
            <el-button type="text" size="small">查看</el-button>
          </template> -->
          <template>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">新增子路由</el-button>
            <!-- <el-button type="text" size="small">查看</el-button> -->
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
      selectOptions: null,
      options: [
        { systemId: 1, title: "博客后台管理系统" },
        { systemId: 2, title: "微前端导航" },
      ],
      tableData: [
        {
          path: "/document",
          name: "document",
          redirect: "/document/manageDoc",
          meta: { title: "文件管理", icon: "el-icon-folder" },
          children: [
            {
              path: "/document/manageDoc",
              name: "manage",
              meta: { title: "管理文档", canDelete: true, showTag: true },
              oplist: ["searchlist", "sumbit", "sumbit", "sumbit", "sumbit"],
            },
            {
              path: "/document/addDoc",
              name: "addDoc",
              meta: { title: "新增文档", canDelete: true, showTag: true },
            },
          ],
        },
        {
          path: "/messageboard",
          name: "messageboard",
          redirect: "/messageboard/manageMsg",
          meta: { title: "留言板", icon: "el-icon-document" },
          children: [
            {
              path: "/messageboard/manageMsg",
              name: "manageMsg",
              meta: { title: "留言板管理", canDelete: true, showTag: true },
            },
          ],
        },
        {
          path: "/project",
          name: "project",
          redirect: "/project/projectshow",
          meta: { title: "项目管理", icon: "el-icon-document" },
          children: [
            {
              path: "/project/projectshow",
              name: "projectshow",
              meta: { title: "项目展示", canDelete: true, showTag: true },
            },
            {
              path: "/project/projectcontrol",
              name: "projectcontrol",
              meta: { title: "项目管理", canDelete: true, showTag: true },
            },
          ],
        },
        {
          path: "/power",
          name: "power",
          redirect: "/power/powerrole",
          meta: { title: "权限管理", icon: "el-icon-document" },
          children: [
            {
              path: "/power/powerrole",
              name: "powerrole",
              meta: { title: "账号管理", canDelete: true, showTag: true },
            },
            {
              path: "/power/powerrole/details",
              name: "powerrole/details",
              meta: { title: "权限详情", canDelete: true, showTag: false },
            },
            {
              path: "/power/powerpage",
              name: "powerpage",
              meta: { title: "角色管理", canDelete: true, showTag: true },
            },
            {
              path: "/power/powerrouter",
              name: "powerrouter",
              meta: { title: "路由管理", canDelete: true, showTag: true },
            },
          ],
        },
        {
          path: "/configuration",
          name: "configuration",
          redirect: "/configuration/userconfig",
          meta: { title: "配置", icon: "el-icon-document" },
          children: [
            {
              path: "/configuration/userconfig",
              name: "userconfig",
              meta: { title: "个人中心", canDelete: true, showTag: true },
            },
          ],
        },
        {
          path: "/components",
          name: "components",
          redirect: "/components/drag",
          meta: { title: "组件", icon: "el-icon-document" },
          children: [
            {
              path: "/components/drag",
              name: "drag",
              meta: { title: "自由拖拽", canDelete: true, showTag: true },
            },
            {
              path: "/components/timeline",
              name: "timeline",
              meta: { title: "自定义时间线", canDelete: true, showTag: true },
            },
            {
              path: "/components/todolist",
              name: "todolist",
              meta: { title: "待办清单", canDelete: true, showTag: true },
            },
            {
              path: "/components/workwave",
              name: "workwave",
              meta: { title: "待办清单", canDelete: true, showTag: true },
            },
          ],
        },
      ],
    };
  },
  methods: {
    sonoftree({ row }) {
      return row.children ? "" : "son-of-tree";
    },
  },
};
</script>

<style lang="scss" scoped>
.power-router {
  padding: 30px 45px 20px 50px;
  ::v-deep.son-of-tree {
    background-color: rgb(250, 250, 250);
  }
}
.inline-block {
  display: inline-block;
}
.tags {
  margin-right: 10px;
  height: 21px;
  padding: 0 8px;
  line-height: 21px;
  display: inline-block;
  font-size: 12px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
}
</style>
