// @flow

const removeDevTag = require('./removeDevTag')
const createDevTag = require('./createDevTag')

/**
 * Incrementa um número no index do array recebido
 * 
 * @param {Array<string|number>} tag - Array com os campos da tag atual.
 * @param {number} targetIndex - item do array que foi solicitada a alteração.
 * @returns {string} nova tag a ser registrada no git.
 * 
 * @example
 * increment([1, 0, 0, 'develop'], 3)
 */

const increment = (tag: Array<string | number>, targetIndex: number): string => {
  tag = createDevTag(tag, targetIndex)
  tag = removeDevTag(tag, targetIndex)

  if( typeof tag[targetIndex] === 'number' ) tag[targetIndex] ++
  
  return tag.join('.')
}

module.exports = increment