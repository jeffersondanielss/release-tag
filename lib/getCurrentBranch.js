const command = require('./command');

/**
 * Pega a branch atual do projeto
 * 
 */

const getCurrentBranch = (cmd = 'git branch') => command(cmd).split('\n').filter(current => !current.indexOf('* ')).join('').replace('* ', '');

module.exports = getCurrentBranch;