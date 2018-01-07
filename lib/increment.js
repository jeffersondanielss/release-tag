const removeDevTag = require('./removeDevTag');
const createDevTag = require('./createDevTag');

/**
 * Incrementa um número no index do array recebido
 * 
 */

const increment = (tag, targetIndex) => {
  tag = createDevTag(tag, targetIndex);
  tag = removeDevTag(tag, targetIndex);

  if (typeof tag[targetIndex] === 'number') tag[targetIndex]++;

  return tag.join('.');
};

module.exports = increment;