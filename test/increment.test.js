'use strict'

const test = require('ava')
const increment = require('../lib/increment')

test('increment é uma função', t => {
  let isFunction = typeof increment
  let result = 'function'

  t.is(isFunction, result)
})

test('increment retorna uma string', t => {
  let tagType = typeof increment([0, 2, 3, 1, 'develop'], 0)
  let result = 'string'

  t.is(tagType, result)
})

test('Incrementar index 0', t => {
  let tag = increment([0, 2, 3, 1, 'develop'], 0)
  let result = '1.0.0'

  t.is(tag, result)
})

test('Incrementar index 1', t => {
  let tag = increment([0, 2, 3, 1, 'develop'], 1)
  let result = '0.3.0'

  t.is(tag, result)
})

test('Incrementar index 2', t => {
  let tag = increment([0, 2, 3, 1, 'develop'], 2)
  let result = '0.2.4'

  t.is(tag, result)
})

test('Incrementar index 3', t => {
  let tag = increment([0, 2, 3, 1, 'develop'], 3)
  let result = '0.2.3.2.develop'

  t.is(tag, result)
})
