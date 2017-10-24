'use strict'

const { execSync } = require('child_process')

const command = cmd => execSync(cmd).toString()

module.exports = command
