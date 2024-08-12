#!/usr/bin/env node
const { program } = require('commander')
const rcmpCli = require('../libs/actions')
const helpFn = require('../libs/help')

helpFn()
program.action(rcmpCli)
program.parse(process.argv)
