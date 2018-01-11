// @flow

const { execSync } = require('child_process')

/**
 * Executa comando recebido por parametro no terminal
 * 
 * @param {string} cmd - comando bash recebido.
 * @returns {string} terminal output do comando recebido.
 */

const command = (cmd: string): string =>
  execSync(cmd).toString()

module.exports = command
