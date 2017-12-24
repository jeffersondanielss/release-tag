#!/usr/bin/env node

// @flow

const inquirer = require('inquirer')
const { en } = require('./lib/questions')
const releaseTag = require('./lib/releaseTag')
const { resolveArgs, args } = require('./lib/resolveArgs')

const index = () => {
  inquirer
    .prompt(en)
    .then(
      ({ type }) => releaseTag(type),
      (err) => console.log('Error :', err)
    )
}

args
  ? console.log(resolveArgs())
  : index()
