// @flow

const help = require('./help')()
const version = require('./getVersion')()
const args = process.argv.slice(2, 3).toString()

/**
 * Filtra argumentos recebidos
 * 
 * @returns {string}
 */

const resolveArgs = (arg: string = args) => {
  switch (arg) {
    case '--version':
    case '-v':
      return version

    default:
      return help
  }
}

module.exports = { resolveArgs, args }