'use strict'

const test = require('ava')
const getVersion = require('../lib/getVersion')

test('getVersion é uma função', t => {
  let isFunction = typeof getVersion
  let result = 'function'

  t.is(isFunction, result)
})

test('getVersion retorna uma string', t => {
  let branch = typeof getVersion()
  let result = `string`

  t.is(branch, result)
})