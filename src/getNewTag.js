// @flow

/**
 * Faz o comando para criar uma nova tag no git
 * 
 * @returns {string}
 */

const getNewTag = (tag: string) =>
  `git tag -a ${tag} -m 'Bump of version: ${tag}'`

module.exports = getNewTag
