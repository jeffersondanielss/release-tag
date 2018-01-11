// @flow

/**
 * Exibe mensagem de ajuda para o usuário
 * 
 * @returns {string} lista de comandos válidos.
 */

const help = (): string => `
  Commands

  - release
  - release --help
  - release -v
  - release --version
`

module.exports = help
