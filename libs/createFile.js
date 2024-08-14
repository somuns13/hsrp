const fs = require('fs')
const path = require('path')
const { consoleFn, createFileFn, formatDate } = require('../utils')
const { FILE_TYPE_LIST } = require('../dic')
const { getRandom } = require('../utils/utils')
const curPath = process.cwd()

const createVueFile = (fileId, fileName, filePath, fileType, cb) => {
  try {
    fileName = fileName.includes('.vue') ? fileName.replace('.vue', '') : fileName
    const compTmpPath = path.join(__dirname, `../components/${fileType}.vue`)
    const targetPath = path.join(curPath, `/${filePath}/${fileName}.vue`)
    if (fs.existsSync(compTmpPath)) {
      let fileInfo = fs.readFileSync(compTmpPath, 'utf-8')
      fileInfo = fileInfo.replace('%tmp%', fileId)
      createFileFn(fileInfo, targetPath, _ => {
        consoleFn(`\nCREATE FILE SUCCESS：${fileName}.vue文件创建成功(模板类型为${fileType})，如文件中存在apiConfig等关于请求相关常量参数，请及时进行调整，否则会导致接口请求异常！\n`, 'cyan')
        cb && cb()
      })
    } else {
      consoleFn(`\nERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：不存在${fileType}模板文件； PS：当前支持的模板包含${FILE_TYPE_LIST.join('、')}\n`, 'red')
    }
  } catch (err) {
    consoleFn(`ERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：${err}`, 'red')
  }
}

const updateRouteFile = (fileId, fileName, filePath) => {
  const routeFilePath = path.join(curPath, '/src/router/asyncRouterComponent.js')
  if (fs.existsSync(routeFilePath)) {
    const reg = /\{([\s\S]*?)}/
    let routeInfo = fs.readFileSync(routeFilePath).toString()
    if (routeInfo.match(reg)[1]) {
      let newRouteInfoStr = routeInfo.match(reg)[1]
      if (!newRouteInfoStr.includes(fileId)) {
        const isExistComma = newRouteInfoStr.replace(/\n/g, '').endsWith(',')
        const newItem = `${isExistComma ? '' : ','}${fileId}: () => import(/* webpackChunkName: "${fileName}_${getRandom(12)}" */ "${filePath.replace('/src', '@')}${fileName}.vue")`
        newRouteInfoStr = `{ \n${newRouteInfoStr}\n${newItem}\n }`
        routeInfo = routeInfo.replace(reg, newRouteInfoStr)
        fs.writeFileSync(routeFilePath, routeInfo)
      } else {
        consoleFn(`WARNING：菜单编号【${fileId}】已存在，不支持创建相同菜单编号的路由\n`, 'yellow')
      }
    }
  }
}

module.exports = {
  createVueFile,
  updateRouteFile
}
