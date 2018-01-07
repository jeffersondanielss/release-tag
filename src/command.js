// @flow

const { execSync } = require('child_process')

const command = (cmd: string): string =>
  execSync(cmd).toString()

module.exports = command
