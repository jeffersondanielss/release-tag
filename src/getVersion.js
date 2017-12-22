// @flow

const path = require('path')
const pkg = require('../package.json')

/**
 * Mostra a versão atual da lib
 * 
 * @returns {string}
 */

const getVersion = () => pkg.version

module.exports = getVersion
