'use strict'

const test = require('ava')
const getCurrentBranch = require('../lib/getCurrentBranch')

test('getCurrentBranch é uma função', t => {
  let isFunction = typeof getCurrentBranch
  let result = 'function'

  t.is(isFunction, result)
})

test('getCurrentBranch retorna uma string', t => {
  let branchType = typeof getCurrentBranch()
  let result = 'string'

  t.is(branchType, result)
})

test('getCurrentBranch retorna branch atual', t => {
  let branch = getCurrentBranch(`echo '* master\n   develop\n'`)
  let result = 'master'

  t.is(branch, result)
})