const currentBranch = require('./getCurrentBranch')();
const command = require('./command');

/**
 * Pega a tag mais recente do projeto
 * 
 * @returns {string}
 */

const getCurrentTag = (type, cmd = 'git describe') => {
  try {
    return command(cmd);
  } catch (error) {
    return type === 'dev' ? `0.0.0.0.${currentBranch}` : '0.0.0';
  }
};

module.exports = getCurrentTag;