'use strict'

const test = require('ava')
const { en, pt } = require('../lib/questions')

test('propriedade en de questions é um array', t => {
  let isArray = Array.isArray(en)
  let result = true

  t.is(isArray, result)
})