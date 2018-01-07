// @flow

/**
 * Faz o comando para criar uma nova tag no git
 * 
 */

const getNewTag = (tag: string): string =>
  `git tag -a ${tag} -m 'Bump of version: ${tag}'`

module.exports = getNewTag
