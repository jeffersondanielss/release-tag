'use strict'

const increment = require('./increment')

const typeTag = (type, array) => {
  switch (type) {
    case 'major':
      return increment(array, 0)

    case 'minor':
      return increment(array, 1)

    case 'path':
      return increment(array, 2)

    default:
      return increment(array, 3)
  }
}

module.exports = typeTag
