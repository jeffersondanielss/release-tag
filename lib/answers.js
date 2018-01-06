const inquirer = require('inquirer');
const { en } = require('./questions');

const answers = () => {
  return new Promise(function (resolve, reject) {
    inquirer.prompt(en).then(resp => resolve(resp), err => reject(err));
  });
};

module.exports = answers;