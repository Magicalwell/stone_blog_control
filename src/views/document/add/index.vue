<template>
  <div class="add-doc">
    <div class="doc-info-container">
      <h3 style="line-height: 1.5; border-bottom: 2px solid #000">新增文章</h3>
      <el-form :model="valueConfig">
        <el-form-item label="文章标题：" class="block">
          <el-input
            v-model="valueConfig.articletTitle"
            placeholder="请输入文章标题"
          ></el-input>
        </el-form-item>
        <el-form-item class="inline-block" label="文章分类：">
          <el-select
            v-model="valueConfig.articletType"
            placeholder="请选择文章分类"
          >
            <el-option
              v-for="item in selectOptions.articletTitle"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            >
            </el-option>
          </el-select>
          <small
            >没有想要的分类?
            <span
              style="text-decoration: underline; cursor: pointer"
              @click="addDocClassify"
              >去新增</span
            >
          </small>
        </el-form-item>
        <el-form-item
          class="block doc-tags"
          label="文章分类："
          style="margin-top: 20px"
        >
          <el-collapse style="width: 500px; border-top-color: transparent">
            <el-collapse-item>
              <template slot="title">
                <template v-if="valueConfig.chooseTags.length > 0">
                  <el-tag
                    style="margin: 5px 10px 5px 0"
                    type="info"
                    v-for="tag in valueConfig.chooseTags"
                    :key="tag"
                    >{{ tag }}</el-tag
                  >
                </template>

                <div v-else style="float: right">点击添加文章标签</div>
              </template>
              <div>
                <el-tag
                  class="input-tag"
                  :key="tag"
                  v-for="tag in valueConfig.chooseTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)"
                >
                  {{ tag }}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
                >
                </el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput"
                  >+ 新增</el-button
                >
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-form-item>
      </el-form>
    </div>
    <mavon-editor v-model="valueConfig.articleValue"></mavon-editor>
    <div class="footer-btn">
      <el-button class="btn-items">创建文章</el-button>
      <el-button class="btn-items">返回</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      valueConfig: { articleValue: "", chooseTags: [] },
      inputValue: "",
      inputVisible: false,
    };
  },
  computed: {
    ...mapState(["selectOptions"]),
  },
  methods: {
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        if (this.valueConfig.chooseTags.includes(inputValue)) {
          return this.$message("请不要重复输入相同标签哦！");
        }
        this.valueConfig.chooseTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    handleClose(tag) {
      this.valueConfig.chooseTags.splice(
        this.valueConfig.chooseTags.indexOf(tag),
        1
      );
    },
    addDocClassify() {
      this.$prompt("请输入新增的类型", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[\u4E00-\u9FA5A-Za-z0-9]{1,20}$/,
        inputErrorMessage: "请输入文字/字母/数字！",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "新增成功！",
          });
        })
        .catch(() => {});
    },
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
.doc-tags {
  ::v-deep.el-form-item__label {
    line-height: 50px;
  }
  ::v-deep.el-collapse-item__header {
    padding-bottom: 5px;
    flex-wrap: wrap;
    min-height: 48px;
    line-height: 1;
    height: auto;
  }
}
.input-new-tag {
  width: 90px;
}
.input-tag {
  margin: 0 10px 10px 0;
}
.footer-btn {
  margin-top: 30px;
  .btn-items {
    font: initial;
    font-size: 14px;
    color: #606266;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
      Microsoft YaHei, Arial, sans-serif;
    border: 1.5px solid #000;
    border-radius: 12px;
    padding: 10px 16px;
  }
}
</style>
