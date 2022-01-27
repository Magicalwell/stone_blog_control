<template>
  <div class="pop-change-roles">
    <el-dialog
      title="角色授权"
      :visible.sync="dialogTableVisible"
      center
      width="65%"
    >
      <div class="roles-container">
        <div class="title" style="display: flex; margin-bottom: 20px">
          <p class="label">角色：</p>
          {{ roleData.rolesname }}
        </div>
        <div
          class="roles-tree"
          style="display: flex; margin-bottom: 20px"
          v-loading="loading"
        >
          <div class="op-container" style="display: flex; flex: 1">
            <div class="label">授权功能：</div>
            <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps"
              class="tree"
              ref="optree"
            >
            </el-tree>
          </div>
          <div class="router-container" style="display: flex; flex: 1">
            <div class="label">授权菜单：</div>
            <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps"
              style="flex: 1"
              ref="routertree"
              class="tree"
            >
            </el-tree>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">授 权</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    rolesId: {
      type: Number,
    },
    showControl: {
      type: Boolean,
      default: false,
    },
    roleData: {
      type: Object,
    },
  },
  data() {
    return {
      loading: false,
      data: [
        {
          id: 1,
          label: "后台管理系统",
          children: [
            {
              id: 3,
              label: "文件管理",
              children: [
                {
                  id: 7,
                  label: "管理文档",
                  children: [
                    {
                      id: 10,
                      label: "删除文档",
                    },
                  ],
                },
                {
                  id: 8,
                  label: "新增文档",
                },
              ],
            },
            {
              id: 4,
              label: "留言板",
              children: [
                {
                  id: 9,
                  label: "留言板管理",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "主页导航系统",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
      ],
      dialogTableVisible: false,
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    submit() {
      console.log(this.$refs.optree.getCheckedKeys(true));

      this.dialogTableVisible = false;
    },
  },
  watch: {
    showControl: {
      handler(val) {
        this.dialogTableVisible = val;
      },
    },
    dialogTableVisible: {
      handler(val) {
        if (val) {
          console.log("open");
        }
        this.$emit("update:showControl", val);
      },
    },
    rolesId: {
      handler(val) {
        if (val) {
          console.log(val);
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  width: 80px;
  text-align: right;
}
.tree {
  flex: 1;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
}
</style>
