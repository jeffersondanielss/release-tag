'use strict'

const test = require('ava')
const answers = require('../lib/answers')

test('answers é uma função', t => {
  let isFunction = typeof answers
  let result = 'function'

  t.is(isFunction, result)
})