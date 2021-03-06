// @flow

const inquirer = require('inquirer')
const { en } = require('./questions')

/**
 * Get answers of user choices
 * 
 * @returns {Promise} resposta da interação do usuário com o prompt.
 */

const answers = (): Promise<any> =>
  inquirer.prompt(en)

module.exports = answers