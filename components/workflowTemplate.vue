<template>
  <WorkflowTemplate
    :wlServer="wlServer"
    :submitForm="submitForm"
    :enableFormTemplate="true"
    :isInitiate="isInitiate"
    :enableTraceInfoTab="!isInitiate"
    :enableTimeConsumingInfoTab="!isInitiate"
    :getFormData="getFormData"
    :startProcessMenuId="startProcessMenuId"
    :saveSuccessTipsText="saveSuccessTipsText"
    ref="workflowTemp"
    startBtnTxt="发起"
    @getFormInfo="getFormInfo"
    @closeWflTab="handleCloseWflTab"
  >
    <!-- 此处为表单页面 -->
    <TestWflForm ref="wflForm"/>
  </WorkflowTemplate>
</template>

<script>
export default {
  name: '%tmp%',
  components: {},
  data() {
    return {
      wlServer: window,
      baseInfo: {},
      isInfoSuccess: false,
      viewMode: false,
    };
  },
  computed: {
    mainInfo() {
      return JSON.parse(this.$route.query.main || '{}');
    },
    isInitiate() {
      return !!this.mainInfo.isInitiate;
    },
    startProcessMenuId() {
      return this.mainInfo.menuId;
    },
    saveSuccessTipsText() {
      return this.isInitiate ? '发起成功，如页面状态未更新，请手动刷新' : '成功提交任务，如页面状态未更新，请手动刷新';
    }
  },
  methods: {
    getFormInfo(baseInfo, _this) {
      this.viewMode = _this.viewMode;
      this.getBaseInfo(baseInfo, _this);
    },
    getBaseInfo(baseInfo, _this) {
      const newBaseInfo = { ...baseInfo }
      if (!_this.viewMode && !this.isInitiate) {
        newBaseInfo.pre_handle_opinion = newBaseInfo.handle_opinion;
        newBaseInfo.handle_opinion = '';
      }
      this.baseInfo = {
        ...newBaseInfo,
        ...baseInfo
      };
    },
    getFormData() {
      const formInfo = this.$refs['wflForm'].getFormData();
      return {
        ...formInfo
      };
    },
    submitForm(actionVal, actionName, _this) {
      return new Promise((resolve, reject) => {
        if ((actionVal === 'goBack' || actionName === '退回') && !this.isInitiate) {
          // 需wflForm组件内部实现validateField方法
          this.$refs['wflForm'].validateField(['handle_opinion']).then(_ => {
            this.handleSubmitProcess(actionVal, actionName, _this, resolve, reject);
          }).catch(_ => {
            this.setLoadingStatus(false);
          });
        } else {
          // 需wflForm组件内部实现validateField方法
          this.$refs['wflForm'].validator().then(_ => {
            if (this.isInitiate) {
              this.handleStartProcess(resolve, reject);
            } else {
              this.handleSubmitProcess(actionVal, actionName, _this, resolve, reject);
            }
          }).catch(_ => {
            this.setLoadingStatus(false);
          });
        }
      });
    },
    handleSubmitProcess(actionVal, actionName, _this, resolve, reject) {
      // 需wflForm组件内部实现getFormData方法
      const formInfo = this.$refs['wflForm'].getFormData();
      const params = {
        process_instance_id: _this.processInstanceId,
        task_id: _this.taskId,
        action_value: actionVal,
        action_name: actionName,
        form_info: JSON.stringify({
          ...formInfo
        })
      };
      this.setLoadingStatus(true);
      this.$http.post(`${this.wlServer}/submitTask`, params).catch(_ => {
        reject();
      }).finally(_ => {
        resolve(formInfo.handle_opinion);
        this.setLoadingStatus(false);
      });
    },
    handleStartProcess(resolve, reject) {
      // 需wflForm组件内部实现getFormData方法
      const formInfo = this.$refs['wflForm'].getFormData();
      const params = {
        form_info: JSON.stringify({
          ...formInfo
        })
      };
      this.setLoadingStatus(true);
      this.$http.post(`${this.wlServer}/startWithCallBack`, params).catch(_ => {
        reject();
      }).finally(_ => {
        resolve(formInfo.handle_opinion);
        this.setLoadingStatus(false);
      });
    },
    handleCloseWflTab() {
    },
    setLoadingStatus(flag) {
      this.$refs['workflowTemp'] && this.$refs['workflowTemp'].setLoadingStatus && this.$refs['workflowTemp'].setLoadingStatus(flag);
    }
  }
};
</script>

<style scoped lang="scss">

</style>

