'use strict'

const getNewTag = tag => `git tag -a ${tag} -m 'Bump of version: ${tag}'`

module.exports = getNewTag
