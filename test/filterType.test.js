'use strict'

const test = require('ava')
const filterType = require('../lib/filterType')

test('filterType é uma função', t => {
  let isFunction = typeof filterType
  let result = 'function'

  t.is(isFunction, result)
})

test('filterType retorna uma string', t => {
  let tagType = typeof filterType('major', [5, 0, 2, 1, 'develop'])
  let result = 'string'

  t.is(tagType, result)
})

test('Incrementar array dependendo do tipo major release', t => {
  let operation = filterType('major', [5, 0, 2, 1, 'develop'])
  let result = '6.0.0'

  t.is(operation, result)
})

test('Incrementar array dependendo do tipo minor de release', t => {
  let operation = filterType('minor', [5, 0, 2, 1, 'develop'])
  let result = '5.1.0'

  t.is(operation, result)
})

test('Incrementar array dependendo do tipo patch de release', t => {
  let operation = filterType('patch', [5, 0, 2, 1, 'develop'])
  let result = '5.0.3'

  t.is(operation, result)
})

test('Incrementar array dependendo do tipo dev de release', t => {
  let operation = filterType('dev', [5, 0, 2, 1, 'develop'])
  let result = '5.0.2.2.develop'

  t.is(operation, result)
})
