#!/usr/bin/env node
const { program } = require('commander')
const hsrp = require('../libs/actions')
const helpFn = require('../libs/help')

helpFn()

program.parseAsync = (argv) => {
  if (argv.includes('-c')) {
    const index = argv.indexOf('-c')
    argv.splice(index, 2) // 删除-c及其后面的参数
  }
  return program.parse(argv)
}
program.action(hsrp).parseAsync(process.argv)
