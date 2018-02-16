// @flow

const command = require('./command')

/**
 * Pega a branch atual do projeto
 * 
 * @param {string} [cmd="git branch"] - comando para exibir as branch's do git.
 * @returns {string} branch atual usada pelo usuário.
 * 
 * @example
 * getCurrentBranch('git branch')
 */

const getCurrentBranch = (cmd: string = 'git branch'): string =>
  command(cmd)
    .split('\n')
    .filter(current => !current.indexOf('* '))
    .join('')
    .replace('* ', '')

module.exports = getCurrentBranch
