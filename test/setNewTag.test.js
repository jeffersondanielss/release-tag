'use strict'

const test = require('ava')
const setNewTag = require('../lib/setNewTag')

test('setNewTag é uma função', t => {
  let isFunction = typeof setNewTag
  let result = 'function'

  t.is(isFunction, result)
})

test('setNewTag retorna uma string', t => {
  let returnType = typeof setNewTag('echo 1.0.1')
  let result = 'string'

  t.is(returnType, result)
})

test('show new tag retorna a concatenação da mensagem com a tag', t => {
  let isArray = setNewTag('echo parametro não usado nesse teste', 'echo 1.0.1')
  let result = `➜  Bump of version: 1.0.1\n`

  t.is(isArray, result)
})
