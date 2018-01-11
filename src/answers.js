// @flow

const inquirer = require('inquirer')
const { en } = require('./questions')

/**
 * Get answers of user choices
 * 
 * @returns {Promise} resposta da interação do usuário com o prompt.
 */

const answers = (): Promise<any> => {
  return new Promise(function(resolve, reject){
    inquirer
      .prompt(en)
      .then(
        resp => resolve(resp),
        err => reject(err)
      )
  })
}

module.exports = answers