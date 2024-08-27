const { program } = require('commander')
const { colorize } = require('../utils/index')
const packageJson = require('../package.json')
const { FILE_TYPE_LIST, TMP_INFO } = require('../dic/index')
const simpleNames = Object.keys(TMP_INFO).filter(item => !FILE_TYPE_LIST.includes(item)).map(item => `${TMP_INFO[item]}(${item})`)

const cyanFn = (str) => colorize(str, 'cyan')
const yellowFn = (str) => colorize(str, 'yellow')
const magentaFn = (str) => colorize(str, 'magenta')

const helpFn = () => {
  program.version(packageJson.version, cyanFn('-V, --version'), yellowFn('查看当前插件版本'))
  program.option(cyanFn('hsrp'), yellowFn('根据提示创建模板文件'))
    .option(cyanFn('hsrp fileId fileName filePath fileType [-c]'), yellowFn('快捷创建模板文件'))
    .option(cyanFn('hsrp 组件name 文件名称 文件路径 应用组件类型 [是否为组件/路由]'))
    .option(cyanFn('-c'), yellowFn('创建为组件，不修改路由文件'))
    .option(cyanFn('fileType(简写)'), yellowFn(`${simpleNames.join('、')}`))

  program.option(cyanFn('\n\n模板类型(fileType)'), yellowFn('说明'))
    .option(magentaFn('xml相关模板'), yellowFn(''))
    .option(cyanFn('rcmpRiskInfoTmp'), yellowFn('4.0指标模板(xml)'))
    .option(cyanFn('rcmpSearchTmp'), yellowFn('表格查询模板(xml)'))
    .option(cyanFn('rcmpSimpleManage'), yellowFn('表格查询模板(包含新增、修改等)(xml)'))
    .option(cyanFn('rcmpSimpleQuery'), yellowFn('表格查询模板(已废弃)(xml)'))
    .option(magentaFn('非xml相关模板'), yellowFn(''))
    .option(cyanFn('rcmpSearchTemplate'), yellowFn('表格查询模板(非xml)'))
    .option(cyanFn('multiTabTmp'), yellowFn('多tab表格(非xml)'))
    .option(cyanFn('formDialogTmp'), yellowFn('表单弹窗模板(非xml)'))
    .option(cyanFn('workflowTemplate'), yellowFn('流程表单模板(非xml)'))
    .option(cyanFn('vueTmp'), yellowFn('vue模板(非xml)\n'))
}

module.exports = helpFn
