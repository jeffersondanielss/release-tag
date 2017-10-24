#!/usr/bin/env node

'use strict'

const inquirer = require('inquirer')
const { en } = require('./lib/questions')
const release = require('./lib/release')
const { resolveArgs, args } = require('./lib/resolveArgs')

const index = () => {
  inquirer
    .prompt(en)
    .then(({ type }) => release(type), err => console.log('Error :', err))
}

args
  ? console.log(resolveArgs())
  : index()
