const NO_XML_TMP_INFO = {
  fdt: 'formDialogTmp',
  formDialogTmp: 'formDialogTmp',
  rst: 'rcmpSearchTemplate',
  rcmpSearchTemplate: 'rcmpSearchTemplate',
  wft: 'workflowTemplate',
  workflowTemplate: 'workflowTemplate',
  mtt: 'multiTabTmp',
  multiTabTmp: 'multiTabTmp',
  vue: 'vueTmp'
}

const XML_TMP_INFO = {
  rt: 'rcmpRiskInfoTmp',
  rcmpRiskInfoTmp: 'rcmpRiskInfoTmp',
  st: 'rcmpSearchTmp',
  rcmpSearchTmp: 'rcmpSearchTmp',
  sm: 'rcmpSimpleManage',
  rcmpSimpleManage: 'rcmpSimpleManage',
  sq: 'rcmpSimpleQuery',
  rcmpSimpleQuery: 'rcmpSimpleQuery'
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
