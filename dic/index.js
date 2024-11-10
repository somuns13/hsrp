const NO_XML_TMP_INFO = {
  fdt: 'formDialogTmp',
  formDialogTmp: 'formDialogTmp',
  rst: 'rcmpSearchTemplate',
  rcmpSearchTemplate: 'rcmpSearchTemplate',
  wft: 'workflowTemplate',
  workflowTemplate: 'workflowTemplate',
  mtt: 'multiTabTmp',
  multiTabTmp: 'multiTabTmp',
  rsltb: 'rcmpSplitTable',
  rcmpSplitTable: 'rcmpSplitTable',
  vue: 'vueTmp'
}

const XML_TMP_INFO = {
  // 数据迁移（4.0转5.0指标模板）
  rt: 'rcmpRiskInfoTmp',
  rcmpRiskInfoTmp: 'rcmpRiskInfoTmp',
  // 通用查询模板
  st: 'rcmpSearchTmp',
  rcmpSearchTmp: 'rcmpSearchTmp',
  // 兼容通用查询，同时支持上下表格、多tab表格等形式
  stp: 'rcmpSearchTmpPro',
  rcmpSearchTmpPro: 'rcmpSearchTmpPro',
  sm: 'rcmpSimpleManage',
  rcmpSimpleManage: 'rcmpSimpleManage',
  sq: 'rcmpSimpleQuery',
  rcmpSimpleQuery: 'rcmpSimpleQuery',
  // 5.0指标模板
  rt5: 'rcmpRiskTmp',
  rcmpRiskTmp: 'rcmpRiskTmp'
}

const TMP_INFO = { ...NO_XML_TMP_INFO, ...XML_TMP_INFO }

const FILE_TYPE_LIST = [...new Set(Object.values(TMP_INFO))]
const FILE_TYPE_LIST_XML = [...new Set(Object.values(XML_TMP_INFO))]
const FILE_TYPE_LIST_NO_XML = [...new Set(Object.values(NO_XML_TMP_INFO))]

module.exports = {
  FILE_TYPE_LIST_NO_XML,
  FILE_TYPE_LIST_XML,
  FILE_TYPE_LIST,
  TMP_INFO
}
