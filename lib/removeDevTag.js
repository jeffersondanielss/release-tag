

/**
 * Remove a tag de desenvolvimento se uma maior for atualizada
 * 
 * @param {Array<string | number>} tag - Array com os campos da tag atual.
 * @param {number} targetIndex - item do array que foi solicitada a alteração.
 * @returns {Array<string | number>} - tag com campo de dev removido ou tag recebida.
 * 
 * @example
 * removeDevTag([1, 0, 2, 'develop'], 3)
 */

const removeDevTag = (tag, tagIndex) => {
  const isNotDevTag = tagIndex < 3;

  if (isNotDevTag) {
    return tag.map((current, index) => index > tagIndex ? '0' : current).slice(0, 3);
  }

  return tag;
};

module.exports = removeDevTag;