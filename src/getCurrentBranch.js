// @flow

const command = require('./command')

/**
 * Pega a branch atual do projeto
 * 
 */

const getCurrentBranch = (cmd: string = 'git branch'): string =>
  command(cmd)
    .split('\n')
    .filter(current => !current.indexOf('* '))
    .join('')
    .replace('* ', '')

module.exports = getCurrentBranch
