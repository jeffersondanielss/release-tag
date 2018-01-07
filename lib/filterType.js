const increment = require('./increment');

/**
 * Filtra o tipo da tag a ser incrementada
 * 
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