// @flow

const command = require('./command')

/**
 * Pega a branch atual do projeto
 * 
 * @returns {string}
 */

const getCurrentBranch = (cmd: string = 'git branch') =>
  command(cmd)
    .split('\n')
    .filter(current => !current.indexOf('* '))
    .join('')
    .replace('* ', '')

module.exports = getCurrentBranch
