<template>
  <div class="pop-change-roles">
    <el-dialog title="角色授权" :visible.sync="dialogTableVisible" center>
      <div class="roles-container">
        <div class="title" style="display: flex; margin-bottom: 20px">
          <p class="label">角色：</p>
          {{ roleData.rolesname }}
        </div>
        <div class="roles-tree" style="display: flex; margin-bottom: 20px">
          <div class="label">授权功能：</div>
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
            style="flex: 1"
          >
          </el-tree>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false"
          >授 权</el-button
        >
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
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
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
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
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
  watch: {
    showControl: {
      handler(val) {
        this.dialogTableVisible = val;
      },
    },
    dialogTableVisible: {
      handler(val) {
        this.$emit("update:showControl", val);
      },
    },
    rolesId: {
      handler(val) {
        console.log(val);
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
</style>
