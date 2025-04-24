const fs = require('fs')
const path = require('path')
module.exports = (dir) => {
  const methods = {}
  fs.readdirSync(dir)
    .filter((file) => {
      return file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(-3) === '.js'
    })
    .forEach((file) => {
      const method = require(path.join(dir, file))
      const filename = file.replace('.js', '')
      methods[filename] = method
    })
  return methods
}