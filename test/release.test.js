'use strict'

const test = require('ava')
const release = require('../lib/release')

test('release é uma função', t => {
  let isFunction = typeof release
  let result = 'function'

  t.is(isFunction, result)
})