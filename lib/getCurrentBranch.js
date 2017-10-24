'use strict'

const command = require('./command')

const getCurrentBranch = (cmd = 'git branch') =>
  command(cmd)
    .split('\n')
    .filter(current => !current.indexOf('* '))
    .join('')
    .replace('* ', '')

module.exports = getCurrentBranch
