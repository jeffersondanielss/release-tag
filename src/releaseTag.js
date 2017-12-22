// @flow

const filterType = require('./filterType')
const tagToArray = require('./tagToArray')
const getNewTag = require('./getNewTag')
const setNewTag = require('./setNewTag')
const getCurrentTag = require('./getCurrentTag')

/**
 * Executa a sequencia de funções para pegar a tag atual e gerar uma nova
 * 
 */

const release = async (type: string) => {
  const currentTag = await getCurrentTag(type)
  const tagArray = await tagToArray(currentTag)
  const newTag = await filterType(type, tagArray)
  const cmdNewTag = await getNewTag(newTag)
  const stdout = await setNewTag(cmdNewTag)

  console.log(stdout)
}

module.exports = release
