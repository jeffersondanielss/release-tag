const currentBranch = require('./getCurrentBranch')();
const command = require('./command');

/**
 * Tag mais recente do projeto ou uma tag nova caso não exista nenhuma.
 * 
 * @param {string} type - tipo de tag a ser incrementada.
 * @param {string} cmd - comando que exibe a tag mais recente do git.
 * @returns {string} tag mais recente ou uma nova caso inexistente.
 */

const getCurrentTag = (type, cmd = 'git describe') => {
  try {
    return command(cmd);
  } catch (error) {
    return type === 'dev' ? `0.0.0.0.${currentBranch}` : '0.0.0';
  }
};

module.exports = getCurrentTag;