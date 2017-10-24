'use strict'

const test = require('ava')
const getCurrentTag = require('../lib/getCurrentTag')

test('getCurrentTag é uma função', t => {
  let isFunction = typeof getCurrentTag
  let result = 'function'

  t.is(isFunction, result)
})

test('getCurrentTag retorna uma string', t => {
  let tagType = typeof getCurrentTag('')
  let result = 'string'

  t.is(tagType, result)
})


test('retorna nova tag caso der catch', t => {
  let tagType = getCurrentTag('major', '')
  let result = '0.0.0'

  t.is(tagType, result)
})