const command = require('./command');

/**
 * Pega a branch atual do projeto
 * 
 * @param {string} cmd - comando para exibir as branch's do git.
 * @returns {string} branch atual usada pelo usuário.
 */

const getCurrentBranch = (cmd = 'git branch') => command(cmd).split('\n').filter(current => !current.indexOf('* ')).join('').replace('* ', '');

module.exports = getCurrentBranch;