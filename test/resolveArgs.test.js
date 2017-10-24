'use strict'

const test = require('ava')
const { resolveArgs } = require('../lib/resolveArgs')
const help = require('../lib/help')
const path = require('path')
const pkg = require(path.join(__dirname, '../package.json'))

test('resolveArgs é uma função', t => {
  let isFunction = typeof resolveArgs
  let result = 'function'

  t.is(isFunction, result)
})

test('resolveArgs retorna uma string', t => {
  let branch = typeof resolveArgs('--version')
  let result = `string`

  t.is(branch, result)
})

test('Retorna versão do projeto com o argumento --version', t => {
  let version = resolveArgs('--version')
  let result = pkg.version

  t.is(version, result);
})

test('Retorna versão do projeto com o argumento -v', t => {
  let version = resolveArgs('-v')
  let result = pkg.version

  t.is(version, result);
})

test('Retorna ajuda caso o argumento seja --help', t => {
  let version = resolveArgs('--help')
  let result = help()

  t.is(version, result);
})

test('Retorna ajuda caso o argumento seja invalido', t => {
  let version = resolveArgs('--argumentoInvalido')
  let result = help()

  t.is(version, result);
})

test('Retorna ajuda caso não receba nenhum argumento', t => {
  let version = resolveArgs()
  let result = help()

  t.is(version, result);
})