const { program } = require('commander')
const packageJson = require('../package.json')
const { FILE_TYPE_LIST } = require('../dic/index')

const helpFn = () => {
  program.version(packageJson.version)
  program.option('hsrp', '根据提示创建模板文件')
  program.option('hsrp fileId fileName path fileType [-c]', '快捷创建模板文件')
  program.option('fileType', `${FILE_TYPE_LIST.join('、')}`)
  program.option('-c', '创建为组件，不修改路由文件')
}

module.exports = helpFn
