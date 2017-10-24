'use strict'

const command = require('./command')

const getCurrentBranch = () =>
  command('git branch')
    .split('\n')
    .filter(current => !current.indexOf('* '))
    .join('')
    .replace('* ', '')

module.exports = getCurrentBranch
