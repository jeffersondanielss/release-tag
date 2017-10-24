'use strict'

const currentBranch = require('./getCurrentBranch')()
const command = require('./command')

const getCurrentTag = (type, cmd = 'git describe') => {
  try {
    return command(cmd)
  } catch (error) {
    return type === 'dev' ? `0.0.0.0.${currentBranch}` : '0.0.0'
  }
}

module.exports = getCurrentTag
