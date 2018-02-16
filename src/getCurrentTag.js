// @flow

const currentBranch = require('./getCurrentBranch')()
const command = require('./command')

/**
 * Tag mais recente do projeto ou uma tag nova caso não exista nenhuma.
 * 
 * @param {string} type - tipo de tag a ser incrementada.
 * @param {string} [cmd="git describe"] - comando que exibe a tag mais recente do git.
 * @returns {string} tag mais recente ou uma nova caso inexistente.
 * 
 * @example
 * getCurrentTag('minor', 'git describe')
 */

const getCurrentTag = (type: string, cmd: string = 'git describe'): string => {
  try {
    return command(cmd)
  } catch (error) {
    return type === 'dev' ? `0.0.0.0.${currentBranch}` : '0.0.0'
  }
}

module.exports = getCurrentTag
