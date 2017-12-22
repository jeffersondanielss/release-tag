// @flow

const currentBranch = require('./getCurrentBranch')()

const createTagDev = (tag: Array<string | number>, targetIndex: number) => {
  const devTagIndex = 3
  const createTagDev = tag.length <= devTagIndex && targetIndex === devTagIndex

  if (createTagDev) {
    tag.push(0)
    tag.push(currentBranch)
    return tag
  }

  return tag
}

module.exports = createTagDev