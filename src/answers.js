// @flow

const inquirer = require('inquirer')
const { en } = require('./questions')

/**
 * Get answers of user choices
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