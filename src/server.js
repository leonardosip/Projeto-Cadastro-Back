const app = require('./app')

const server = app.listen('3333',() => {
  console.log(`rodando em http://localhost:3333 `)
})

module.exports = server