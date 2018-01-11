const help = require('./help')();
const version = require('./getVersion')();
const args = process.argv.slice(2, 3).toString();

/**
 * Filtra argumentos recebidos
 * 
 * @param {string} args - argumento passados pelo usuáio.
 * @returns {string} versão da cli ou ajuda.
 */

const resolveArgs = (arg = args) => {
  switch (arg) {
    case '--version':
    case '-v':
      return version;

    default:
      return help;
  }
};

module.exports = { resolveArgs, args };