// @flow

const command = require('./command')

/**
 * Cria a nova tag no git e retona mensagem de sucesso.
 * 
 * @param {string} newTag - comando git para registrar a nova tag.
 * @param {string} cmd - comando para exibir a tag mais atual do git.
 * @returns {string} Output para o usuário da nova tag que foi gerada.
 */

const setNewTag = (newTag: string, cmd: string = 'git describe'): string => {
  const createNewTag = command(newTag)
  const tag = command(cmd)
  return `➜  Bump of version: ${tag}`
}

module.exports = setNewTag
