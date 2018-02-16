const increment = require('./increment');

/**
 * Filtra o tipo da tag a ser incrementada
 * 
 * @param {string} type - tipo da tag que vai ser incrementada
 * @param {Array<string|number>} tag - Array com os campos da tag atual.
 * @returns {string} nova tag incrementada dependendo do tipo informado.
 * 
 * @example
 * filterType('major', [1, 0, 4])
 */

const filterType = (type, tag) => {
  switch (type) {
    case 'major':
      return increment(tag, 0);

    case 'minor':
      return increment(tag, 1);

    case 'path':
      return increment(tag, 2);

    default:
      return increment(tag, 3);
  }
};

module.exports = filterType;