'use strict'

const test = require('ava')
const getNewTag = require('../lib/getNewTag')

test('getNewTag é uma função', t => {
  let isFunction = typeof getNewTag
  let result = 'function'

  t.is(isFunction, result)
})

test('getNewTag retorna uma string', t => {
  let tagType = typeof getNewTag('1.2.3.1.develop')
  let result = 'string'

  t.is(tagType, result)
})

test('returna comando que gera nova tag', t => {
  let cmdNewTag = getNewTag('1.2.3.1.develop')
  let result = `git tag -a 1.2.3.1.develop -m 'Bump of version: 1.2.3.1.develop'`

  t.is(cmdNewTag, result)
})

test('returna comando que gera nova tag sem branch bugfix', t => {
  let cmdNewTag = getNewTag('1.2.3')
  let result = `git tag -a 1.2.3 -m 'Bump of version: 1.2.3'`

  t.is(cmdNewTag, result)
})