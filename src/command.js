// @flow

const { execSync } = require('child_process')

const command = (cmd: string) => execSync(cmd).toString()

module.exports = command
