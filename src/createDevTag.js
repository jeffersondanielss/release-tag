// @flow

const currentBranch = require('./getCurrentBranch')()

const createTagDev = (tag: Array<string | number>, targetIndex: number): Array<string | number> => {
  const devTagIndex: number = 3
  const createTagDev: boolean = tag.length <= devTagIndex && targetIndex === devTagIndex

  if (createTagDev) {
    tag.push(0)
    tag.push(currentBranch)
    return tag
  }

  return tag
}

module.exports = createTagDev