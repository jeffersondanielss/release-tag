'use strict'

const test = require('ava')
const command = require('../lib/command')

test('command é uma função', t => {
  let isFunction = typeof command
  let result = 'function'

  t.is(isFunction, result)
})

test('command retorna uma string', t => {
  let branch = command('echo release project')
  let result = `release project\n`

  t.is(branch, result)
})