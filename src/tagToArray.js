// @flow

/**
 * Transforma tag em um array
 *
 * @param {string} currentTag - tag mais atual no git.
 * @returns {Array<string|number>} tag mais atual dividida em um array.
 */

const tagToArray = (currentTag: string): Array<string|number> => {
  let tag = currentTag.split('-')
  tag = tag[0].split('.')

  return tag.map(
    current =>
      isNaN(current) ? current.replace(/\n/g, '') : parseFloat(current)
  )
}

module.exports = tagToArray