'use strict'

const typeTag = require('./typeTag')
const splitTag = require('./splitTag')
const getNewTag = require('./getNewTag')
const setNewTag = require('./setNewTag')
const getCurrentTag = require('./getCurrentTag')

const release = async type => {
  const currentTag = await getCurrentTag(type)
  const tagArray = await splitTag(currentTag)
  const newTag = await typeTag(type, tagArray)
  const cmdNewTag = await getNewTag(newTag)
  const stdout = await setNewTag(cmdNewTag)

  console.log(stdout)
}

module.exports = release
