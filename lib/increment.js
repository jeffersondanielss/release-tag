'use strict'

const cleanArray = require('./cleanArray')
const createDevTag = require('./createDevTag')

const increment = (array, targetIndex) => {
  array = createDevTag(array, targetIndex)
  array = cleanArray(array, targetIndex)
  array[targetIndex]++
  return array.join('.')
}

module.exports = increment
