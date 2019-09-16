// @flow

const en = [
  {
    type: 'list',
    name: 'type',
    message: 'Choose the type of the release:',
    choices: ['major', 'minor', 'patch', 'dev'],
    default: 'patch'
  }
]

module.exports = { en }
