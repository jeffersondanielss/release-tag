'use strict'

const currentBranch = require('./getCurrentBranch')()

const createTagDev = (array, targetIndex) => {
  const devTagIndex = 3
  const createTagDev = array.length <= devTagIndex && targetIndex === devTagIndex

  if (createTagDev) {
    array.push(0)
    array.push(currentBranch)
    return array
  }

  return array
}

module.exports = createTagDev