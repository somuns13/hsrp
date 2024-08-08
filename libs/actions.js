const inquirer = require('inquirer')
const path = require('path')

const rcmpCli = (project, args) => {
  const curPath = process.cwd()
  // 命令行的执行逻辑代码,数组中每一个对象表示一个问题
  inquirer.prompt([
    { type: 'list',  name: 'fileType',  choices: ['rcmpRiskInfoTmp', 'rcmpSearchTmp', 'rcmpSimpleManage', 'rcmpSimpleQuery'],  message: '请选择需要创建的文件类型：' },
    { type: 'input',  name: 'filePath',  message: '请输入创建的路径，默认将会创建至src目录下：' },
    { type: 'input',  name: 'routerId',  message: '请输入菜单编号（如为组件请忽略）：' },
  ]).then(answer => {
    console.log(answer, curPath)
  })
}

module.exports = rcmpCli
