

/**
 * Faz o comando para criar uma nova tag no git
 * 
 * @param {string} tag - nova tag a ser registrada
 * @returns {string} comando git para registrar uma nova tag.
 * 
 * @example
 * getNewTag('1.0.5')
 */

const getNewTag = tag => `git tag -a ${tag} -m 'Bump of version: ${tag}'`;

module.exports = getNewTag;