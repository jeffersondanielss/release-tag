

/**
 * Transforma tag em um array
 *
 * @param {string} currentTag - tag mais atual no git.
 * @returns {Array<string|number>} tag mais atual dividida em um array.
 * 
 * @example
 * tagToArray('1.0.2')
 */

const tagToArray = currentTag => {
  let tag = currentTag.split('-');
  tag = tag[0].split('.');

  return tag.map(current => isNaN(current) ? current.replace(/\n/g, '') : parseFloat(current));
};

module.exports = tagToArray;