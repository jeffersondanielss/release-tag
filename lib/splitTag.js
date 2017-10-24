'use strict'

const splitTag = stdout => {
  let tag = stdout.split('-')
  tag = tag[0].split('.')

  return tag.map(
    current =>
      isNaN(current) ? current.replace(/\n/g, '') : parseFloat(current)
  )
}

module.exports = splitTag
