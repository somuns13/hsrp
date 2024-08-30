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
        consoleFn(`\n-----------------------CREATE FILE SUCCESS-----------------------\n\n${fileName}.vue文件创建成功(模板类型为${fileType})\n如文件中存在apiConfig等关于请求相关常量参数，请及时进行调整，否则会导致接口请求异常！\n\n-----------------------------------------------------------------\n`, 'cyan')
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
  try {
    if (fs.existsSync(routeFilePath)) {
      const reg = /\{([\s\S]*?)}/
      let routeInfo = fs.readFileSync(routeFilePath).toString()
      if (routeInfo.match(reg)[1]) {
        let newRouteInfoStr = routeInfo.match(reg)[1].trim ? routeInfo.match(reg)[1].trim() : routeInfo.match(reg)[1]
        if (!newRouteInfoStr.includes(fileId)) {
          const isExistComma = newRouteInfoStr.replace(/\n/g, '').trim().endsWith(',')
          if (!isExistComma) {
            newRouteInfoStr = `${newRouteInfoStr},`
          }
          let newFilePath = filePath.replace('/src', '@')
          newFilePath = newFilePath.endsWith('/') ? newFilePath : `${newFilePath}/`
          const newItem = `${fileId}: () => import(/* webpackChunkName: "${newFilePath}${fileName}_${getRandom(12)}" */ '${newFilePath}${fileName}.vue')`
          // 判断结尾是否存在换行符
          const isLastN = newRouteInfoStr.endsWith('\n')
          newRouteInfoStr = isLastN ? `{\n  ${newRouteInfoStr}  ${newItem}\n}` : `{\n  ${newRouteInfoStr}\n  ${newItem}\n}`

          routeInfo = routeInfo.replace(reg, newRouteInfoStr)
          fs.writeFileSync(routeFilePath, routeInfo)
          consoleFn(`菜单编号【${fileId}】对应的路由信息添加成功！ \n 路由信息：${newItem}\n`, 'cyan')
        } else {
          consoleFn(`WARNING：菜单编号【${fileId}】已存在，不支持创建相同菜单编号的路由\n`, 'yellow')
        }
      }
    }
  } catch (err) {
    consoleFn(`ERROR（${formatDate('', 'yyyy-MM-dd hh:mm:ss')}）：${err}`, 'red')
  }
}

module.exports = {
  createVueFile,
  updateRouteFile
}
