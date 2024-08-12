<template>
  <h-msg-box
    :value="config.isShow"
    :title="config.title || '新增'"
    :width="800"
    :maskClosable="false"
    transfer
    @on-close="handleClose"
    @on-cancel="handleClose"
    @on-open="handleOpen"
  >
    <h-form
      :model="formInfo"
      :label-width="96"
      :cols="1"
      ref="form"
    >
      <h-form-item label="测试" prop="test" required>
        <h-input v-model="formInfo.test"></h-input>
      </h-form-item>
    </h-form>
    <template #footer>
      <h-button @click="handleClose">取消</h-button>
      <h-button :loading="loading" type="primary" @click="handleSubmit">确认</h-button>
    </template>
  </h-msg-box>
</template>

<script>
export default {
  name: '%tmp%',
  props: {
    config: {
      type: Object,
      required: false,
      default() {
        return {
          isShow: false,
          title: '新增',
          type: 'A',
          item: {}
        };
      }
    }
  },
  data() {
    return {
      loading: false,
      formInfo: {
        test: ''
      }
    };
  },
  methods: {
    handleOpen() {
      const initItem = this.config.item || {};
    },
    handleSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
        }
      });
    },
    handleResetData() {
      this.config.isShow = false;
      this.config.item = {};
      this.config.title = '新增';
      this.config.type = 'A';
      this.formInfo.test = '';
      this.$refs['form'].resetFields();
      this.loading = false;
    },
    handleClose() {
      this.handleResetData();
      this.$emit('close');
    }
  }
};
</script>
