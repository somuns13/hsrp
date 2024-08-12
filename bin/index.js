#!/usr/bin/env node
const { program } = require('commander')
const hsrp = require('../libs/actions')
const helpFn = require('../libs/help')

helpFn()
program.action(hsrp)
program.parse(process.argv)
