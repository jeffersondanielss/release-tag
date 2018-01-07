// @flow

/**
 * Remove a tag de desenvolvimento se uma maior for atualizada
 * 
 */

 const removeDevTag = (tag: Array<string | number>, tagIndex: number): Array<string | number> => {
  const isNotDevTag: boolean = tagIndex < 3

  if (isNotDevTag) {
    return tag
      .map((current, index) => (index > tagIndex ? '0' : current))
      .slice(0, 3)
  }

  return tag
}

module.exports = removeDevTag
