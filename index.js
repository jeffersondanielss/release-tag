#!/usr/bin/env node

// @flow

const releaseTag = require('./lib/releaseTag')
const { resolveArgs, args } = require('./lib/resolveArgs')
const userChoice = resolveArgs()

args
  ? console.log(userChoice)
  : releaseTag()
