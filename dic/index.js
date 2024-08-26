const TMP_INFO = {
  fdt: 'formDialogTmp',
  formDialogTmp: 'formDialogTmp',
  rt: 'rcmpRiskInfoTmp',
  rcmpRiskInfoTmp: 'rcmpRiskInfoTmp',
  st: 'rcmpSearchTmp',
  rcmpSearchTmp: 'rcmpSearchTmp',
  sm: 'rcmpSimpleManage',
  rcmpSimpleManage: 'rcmpSimpleManage',
  sq: 'rcmpSimpleQuery',
  rcmpSimpleQuery: 'rcmpSimpleQuery',
  rst: 'rcmpSearchTemplate',
  rcmpSearchTemplate: 'rcmpSearchTemplate',
  wft: 'workflowTemplate',
  workflowTemplate: 'workflowTemplate',
  vue: 'vueTmp'
}

const FILE_TYPE_LIST = [...new Set(Object.values(TMP_INFO))]

module.exports = {
  FILE_TYPE_LIST,
  TMP_INFO
}
