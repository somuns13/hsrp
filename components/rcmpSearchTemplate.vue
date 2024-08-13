<template>
  <div class="search-tmp-content-wrap">
    <rcmpSearchTemplate
      ref="temp"
      :advancedSearch="false"
      :baseSearch="true"
      :baseServer="hsyServer"
      :columns="columns"
      :exportUrl="pbsServer + '/newExport'"
      :filters="filters"
      :formArgs="formArgs"
      :hasMoreConditions="false"
      hasPage
      :height="100"
      highlight-row
      :isSearchFormItemBtnRight="true"
      :occupyHight="8"
      :onRowClick="handleRowClick"
      :onSelect="handleRowSelect"
      :onSelectCancel="handleSelectCancel"
      :onSelectChange="handleSelectChange"
      selfAdaptTable="datagrid"
      :showExportBtnByUrl="true"
      :showRiskFlow="false"
      :showTrigger="false"
      showListCkeckBox
      :url="url"
    >
      <template v-slot:baseCondition="{ form }">
      </template>
      <template v-slot:moreCondition="{ form }">
      </template>
    </rcmpSearchTemplate>
  </div>
</template>

<script>
export default {
  name: '%tmp%',
  data() {
    return {
      url: '',
      formArgs: {},
      columns: [
        { title: 'test01', key: 'test01', width: 110, ellipsis: true },
        { title: 'test02', key: 'test02', minWidth: 200, ellipsis: true },
        { title: 'test03', key: 'test03', ellipsis: true },
        { title: 'test04', key: 'test04', width: 160, ellipsis: true }
      ],
      filters: {},
      loading: false
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleSelectCancel(selections, row) {
    },
    handleSelectChange(arr, selectInx) {
    },
    handleRowSelect(selections, arr) {
    },
    handleRowClick(arr) {
    }
  }
}
</script>

<style lang="scss" scoped>
.search-tmp-content-wrap {
  width: 100%;
  height: 100%;
  padding: 16px 16px 8px 16px;
}
</style>
