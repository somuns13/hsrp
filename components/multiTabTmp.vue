<template>
  <div class="multi-tab-wrap">
    <MultiTabTmp
      v-if="tabList && tabList.length > 0"
      isLazy
      :tabList="tabList"
    />
    <SelfEmpty v-else noDataText="暂无数据" />
    <SelfLoading v-if="loading" fix />
  </div>
</template>

<script>
import test01 from '@/components/test01.vue'
import test01 from '@/components/test02.vue'
export default {
  name: '%tmp%',
  data() {
    return {
      loading: false,
      tabList: [
        { name: 'test01', label: '测试数据01', component: test01 },
        { name: 'test02', label: '测试数据02', component: test02 }
      ]
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.multi-tab-wrap {
  width: 100%;
  height: 100%;
  .multi-tab-tmp-wrap {
    width: 100%;
    height: 100%;

    /deep/ .h-tabs {
      .h-tabs-content-wrap {
        .h-tabs-content {
          .h-tabs-tabpane {
            padding: 0 16px;
          }
        }
      }
    }
  }
}
</style>
