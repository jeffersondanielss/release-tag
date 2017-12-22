

/**
 * Cria a nova tag no git e retona mensagem de sucesso
 * 
 * @returns {string}
 */

const command = require('./command');

const setNewTag = (newTag, cmd = 'git describe') => {
  const createNewTag = command(newTag);
  const tag = command(cmd);
  return `➜  Bump of version: ${tag}`;
};

module.exports = setNewTag;