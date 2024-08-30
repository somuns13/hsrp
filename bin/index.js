#!/usr/bin/env node
const { program } = require('commander')
const hsrp = require('../libs/actions')
const helpFn = require('../libs/help')

helpFn()

const handleArgvFn = (argv, directive) => {
  if (argv.includes(directive)) {
    const index = argv.indexOf(directive)
    argv.splice(index, 2) // 删除-c及其后面的参数
  }
  return argv
}

program.parseAsync = (argv) => {
  handleArgvFn(argv, '-c')
  return program.parse(argv)
}
program.action(hsrp).parseAsync(process.argv)
