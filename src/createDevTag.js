// @flow

const currentBranch = require('./getCurrentBranch')()

/**
 * Adiciona mais um campo no array com a tag e o branch atual
 * caso o index solicitado seja de uma tag de desenvolvimento.
 * 
 * @param {Array<string | number>} tag - Array com os campos da tag atual.
 * @param {number} targetIndex - item do array que foi solicitada a alteração.
 * @returns {Array<string | number>} tag com novo campo de dev ou tag recebida.
 * 
 * @example
 * createTagDev([1, 0, 0, 'develop'], 3)
 */

const createTagDev = (tag: Array<string | number>, targetIndex: number): Array<string | number> => {
  const devTagIndex: number = 3
  const createTagDev: boolean = tag.length <= devTagIndex && targetIndex === devTagIndex

  if (createTagDev) {
    tag.push(0)
    tag.push(currentBranch)
    return tag
  }

  return tag
}

module.exports = createTagDev