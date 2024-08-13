const inquirer = require('inquirer')
const argvs = process.argv.slice(2)

const { FILE_TYPE_LIST, TMP_INFO } = require('../dic/index')
const { consoleFn, formatDate } = require('../utils')
const { createVueFile, updateRouteFile } = require('./createFile')

const hsrp = (project, args) => {
  if (argvs && argvs.length > 0) {
    if (argvs.length >= 4) {
      const fileId = argvs[0]
      const fileName = argvs[1]
      const filePath = argvs[2]
      const fileType = TMP_INFO[argvs[3]]
      const isRoute = argvs[4] !== '-c'
      if (!fileType) {
        return consoleFn(`不存在${fileType}模板文件； PS：当前支持的模板包含${FILE_TYPE_LIST.join('、')}\n`, 'red', `\nERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：`)
      }
      createVueFile(fileId, fileName, filePath, fileType, _ => {
        isRoute && updateRouteFile(fileId, fileName, filePath)
      })
    }
  } else {
    // 命令行的执行逻辑代码,数组中每一个对象表示一个问题
    inquirer.prompt([
      { type: 'list', name: 'fileType', choices: FILE_TYPE_LIST, message: '请选择需要创建的文件类型：' },
      { type: 'input', name: 'filePath', message: '请输入创建的路径（默认创建至src目录下）：' },
      { type: 'input', name: 'fileName', message: '请输入创建的文件名称：' },
      { type: 'input', name: 'fileId', message: '请输入组件name（同菜单编号，未录入时默认使用文件名称）：' },
      { type: 'list', name: 'isRoute', choices: ['是', '否'], message: '是否添加路由信息：' }
    ]).then(params => {
      if (!params.fileName || !params.fileName.trim()) {
        return consoleFn(`文件名称不存在\n`, 'red', `\nERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：`)
      }
      params.filePath = params.filePath || '/src'
      params.fileId = params.fileId.trim() || params.fileName
      const isRoute = params.isRoute === '是'
      createVueFile(params.fileId, params.fileName, params.filePath, params.fileType, _ => {
        isRoute && updateRouteFile(params.fileId, params.fileName, params.filePath)
      })
    })
  }
}

module.exports = hsrp
