const command = require('./command');

/**
 * Cria a nova tag no git e retona mensagem de sucesso.
 * 
 * @param {string} newTag - comando git para registrar a nova tag.
 * @param {string} [cmd='git describe'] - comando para exibir a tag mais atual do git.
 * @returns {string} Output para o usuário da nova tag que foi gerada.
 * 
 * @example
 * setNewTag('1.0.9', 'git describe')
 */

const setNewTag = (newTag, cmd = 'git describe') => {
  const createNewTag = command(newTag);
  const tag = command(cmd);
  return `➜  Bump of version: ${tag}`;
};

module.exports = setNewTag;