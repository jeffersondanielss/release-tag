'use strict'

const test = require('ava')
const help = require('../lib/help')

test('help é uma função', t => {
  let isFunction = typeof help
  let result = 'function'

  t.is(isFunction, result)
})

test('help returna uma string', t => {
  let branch = typeof help()
  let result = `string`

  t.is(branch, result)
})