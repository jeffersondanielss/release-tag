// @flow

/**
 * Cria a nova tag no git e retona mensagem de sucesso
 * 
 */

const command = require('./command')

const setNewTag = (newTag: string, cmd: string = 'git describe'): string => {
  const createNewTag = command(newTag)
  const tag = command(cmd)
  return `➜  Bump of version: ${tag}`
}

module.exports = setNewTag
