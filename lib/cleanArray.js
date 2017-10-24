'use strict'

const cleanArray = (array, changeIndex) => {
  const isNotDevTag = changeIndex < 3

  if (isNotDevTag) {
    return array
      .map((current, index) => (index > changeIndex ? '0' : current))
      .slice(0, 3)
  }

  return array
}

module.exports = cleanArray
