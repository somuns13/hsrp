const { program } = require('commander')
const { colorize } = require('../utils/index')
const packageJson = require('../package.json')
const { FILE_TYPE_LIST, TMP_INFO } = require('../dic/index')
const simpleNames = Object.keys(TMP_INFO).filter(item => !FILE_TYPE_LIST.includes(item)).map(item => `${TMP_INFO[item]}(${item})`)

const cyanFn = (str) => colorize(str, 'cyan')
const yellowFn = (str) => colorize(str, 'yellow')

const helpFn = () => {
  program.version(packageJson.version, cyanFn('-V, --version'), yellowFn('查看当前插件版本\n'))
  program.option(cyanFn('hsrp'), yellowFn('根据提示创建模板文件\n'))
  program.option(cyanFn('hsrp fileId fileName filePath fileType [-c]'), yellowFn('快捷创建模板文件'))
  program.option(cyanFn('hsrp 组件name 文件名称 文件路径 应用组件类型 [是否为组件/路由]\n'))
  program.option(cyanFn('fileType(简写)'), yellowFn(`${simpleNames.join('、')}\n`))
  program.option(cyanFn('-c'), yellowFn('创建为组件，不修改路由文件\n'))
}

module.exports = helpFn
