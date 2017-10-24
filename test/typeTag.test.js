'use strict'

const test = require('ava')
const typeTag = require('../lib/typeTag')

test('typeTag é uma função', t => {
  let isFunction = typeof typeTag
  let result = 'function'

  t.is(isFunction, result)
})

test('typeTag retorna uma string', t => {
  let tagType = typeof typeTag('major', [5, 0, 2, 1, 'develop'])
  let result = 'string'

  t.is(tagType, result)
})

test('Incrementar array dependendo do tipo major release', t => {
  let operation = typeTag('major', [5, 0, 2, 1, 'develop'])
  let result = '6.0.0'

  t.is(operation, result)
})

test('Incrementar array dependendo do tipo minor de release', t => {
  let operation = typeTag('minor', [5, 0, 2, 1, 'develop'])
  let result = '5.1.0'

  t.is(operation, result)
})

test('Incrementar array dependendo do tipo path de release', t => {
  let operation = typeTag('path', [5, 0, 2, 1, 'develop'])
  let result = '5.0.3'

  t.is(operation, result)
})

test('Incrementar array dependendo do tipo dev de release', t => {
  let operation = typeTag('dev', [5, 0, 2, 1, 'develop'])
  let result = '5.0.2.2.develop'

  t.is(operation, result)
})