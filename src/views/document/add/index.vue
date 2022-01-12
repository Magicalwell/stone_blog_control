<template>
  <div class="add-doc">
    <div class="doc-info-container">
      <h3 style="line-height: 1.5">新增文章</h3>
      <el-form :model="valueConfig">
        <el-form-item label="文章标题：" class="block">
          <el-input v-model="valueConfig.articletTitle"></el-input>
        </el-form-item>
        <el-form-item class="inline-block" label="文章分类：">
          <el-select v-model="valueConfig.articletType" placeholder="请选择">
            <el-option
              v-for="item in selectOptions.articletTitle"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <mavon-editor v-model="valueConfig.articleValue"></mavon-editor>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      valueConfig: { articleValue: "" },
    };
  },
  computed: {
    ...mapState(["selectOptions"]),
  },
};
</script>

<style lang="scss" scoped>
.inline-block {
  margin: 30px 50px 0 0;
  display: inline-block;
  ::v-deep.el-form-item__content {
    display: inline-block;
    width: 202px;
  }
}
.block {
  margin: 30px 50px 0 0;
  ::v-deep.el-form-item__content {
    display: inline-block;
  }
}
.add-doc {
  padding: 30px 45px 20px 50px;
}
.doc-info-container {
  margin-bottom: 30px;
}
.el-form-item {
  margin-bottom: 0px;
}
</style>
