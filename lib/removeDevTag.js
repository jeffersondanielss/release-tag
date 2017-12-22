

/**
 * Remove a tag de desenvolvimento se uma maior for atualizada
 * 
 * @returns {array}
 */

const removeDevTag = (tag, tagIndex) => {
  const isNotDevTag = tagIndex < 3;

  if (isNotDevTag) {
    return tag.map((current, index) => index > tagIndex ? '0' : current).slice(0, 3);
  }

  return tag;
};

module.exports = removeDevTag;