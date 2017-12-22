// @flow

/**
 * Transforma tag em um array
 * 
 * @returns {array} 
 */

const tagToArray = (currentTag: string) => {
  let tag = currentTag.split('-')
  tag = tag[0].split('.')

  return tag.map(
    current =>
      isNaN(current) ? current.replace(/\n/g, '') : parseFloat(current)
  )
}

module.exports = tagToArray