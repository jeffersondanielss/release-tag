// @flow

/**
 * Transforma tag em um array
 *
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