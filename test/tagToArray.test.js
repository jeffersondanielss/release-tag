'use strict'

const test = require('ava')
const tagToArray = require('../lib/tagToArray')

test('tagToArray é uma função', t => {
  let isFunction = typeof tagToArray
  let result = 'function'

  t.is(isFunction, result)
})

test('tagToArray retorna um array', t => {
  let tagType = Array.isArray( tagToArray('3.0.1.3.develop') )
  let result = true

  t.is(tagType, result)
})

test('Retuna um array da tag 3.0.1.3.develop', t => {
  let tag = tagToArray('3.0.1.3.develop'),
    major = 3,
    path = 0,
    fix = 1,
    dev = 3,
    branch = 'develop'

  t.is(tag[0], major)
  t.is(tag[1], path)
  t.is(tag[2], fix)
  t.is(tag[3], dev)
  t.is(tag[4], 'develop')
})

test('Retorna um array da tag 1.2.86-11-g657f50a', t => {
  let tag = tagToArray('1.2.86-11-g657f50a'),
    major = 1,
    path = 2,
    fix = 86

  t.is(tag[0], major)
  t.is(tag[1], path)
  t.is(tag[2], fix)
})
