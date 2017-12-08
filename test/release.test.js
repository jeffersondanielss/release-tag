'use strict'

const test = require('ava')
const releaseTag = require('../lib/releaseTag')

test('releaseTag é uma função', t => {
  let isFunction = typeof releaseTag
  let result = 'function'

  t.is(isFunction, result)
})