const inquirer = require('inquirer')
const argvs = process.argv.slice(2)

const { FILE_TYPE_LIST, TMP_INFO, FILE_TYPE_LIST_NO_XML, FILE_TYPE_LIST_XML } = require('../dic/index')
const { consoleFn, formatDate } = require('../utils')
const { createVueFile, updateRouteFile } = require('./createFile')

const hsrpCreateFile = (fileList) => {
  // 命令行的执行逻辑代码,数组中每一个对象表示一个问题
  inquirer.prompt([
    { type: 'list', name: 'fileType', choices: fileList, message: '请选择需要创建的文件类型：' },
    { type: 'input', name: 'filePath', message: '请输入创建的路径（默认创建至src目录下）：', default: '/src' },
    { type: 'input', name: 'fileName', message: '请输入创建的文件名称：' },
    { type: 'input', name: 'fileId', message: '请输入组件name（同菜单编号，未录入时默认使用文件名称）：' },
    { type: 'list', name: 'isRoute', choices: ['是', '否'], message: '是否添加路由信息：' }
  ]).then(params => {
    if (!params.fileName || !params.fileName.trim()) {
      return consoleFn(`\nERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：文件名称不存在\n`, 'red')
    }
    // 将//src///views形式的路径修改为/src/views
    params.filePath = (params.filePath || '/src').replace(/\/+/g, '/')
    if (!params.filePath.startsWith('/src')) {
      params.filePath = `/src/${params.filePath}`
    }

    params.fileId = params.fileId.trim() || params.fileName
    const isRoute = params.isRoute === '是'
    createVueFile(params.fileId, params.fileName, params.filePath, params.fileType, _ => {
      isRoute && updateRouteFile(params.fileId, params.fileName, params.filePath)
    })
  })
}

const simpleDirectiveCreateFileFn = () => {
  const fileId = argvs[0]
  const fileName = argvs[1]
  let filePath = argvs[2]
  const fileType = TMP_INFO[argvs[3]]
  const isRoute = argvs[4] !== '-c'
  if (!fileType) {
    return consoleFn(`\nERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：不存在${fileType}模板文件； PS：当前支持的模板包含${FILE_TYPE_LIST.join('、')}\n`, 'red')
  }
  // 将//src///views形式的路径修改为/src/views
  filePath = filePath.replace(/\/+/g, '/')
  if (!filePath.startsWith('/src')) {
    filePath = `/src/${filePath}`
  }
  createVueFile(fileId, fileName, filePath, fileType, _ => {
    isRoute && updateRouteFile(fileId, fileName, filePath)
  })
}

const hsrpCreateFileSimple = () => {
  if (argvs.length >= 4) {
    simpleDirectiveCreateFileFn()
  } else if (argvs.length === 1) {
    if (argvs[0] === '-x') {
      hsrpCreateFile(FILE_TYPE_LIST_XML)
    } else if (argvs[0] === '-t') {
      hsrpCreateFile(FILE_TYPE_LIST_NO_XML)
    } else {
      return consoleFn(`\nERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：指令未定义，请使用hsrp -h 或点击 http://10.20.146.63:8080/pages/9bcc25 查看文档\n`, 'red')
    }
  } else {
    return consoleFn(`\nERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：参数异常，正确格式为【hsrp 组件name 文件名称 文件路径 组件类型 [是否为组件/路由]】\n`, 'red')
  }
}

const hsrp = (project, args) => {
  if (argvs && argvs.length > 0) {
    hsrpCreateFileSimple()
  } else {
    // 命令行的执行逻辑代码,数组中每一个对象表示一个问题
    hsrpCreateFile(FILE_TYPE_LIST)
  }
}

module.exports = hsrp
