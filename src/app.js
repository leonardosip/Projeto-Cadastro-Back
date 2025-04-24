const express = require('express');
const routeController = require('./routes')
const app = express()
const bodyParser = require ('body-parser')
const cors = require ("cors")

app.use(cors({
  origin: '*', 
  methods: 'GET,PUT,POST,DELETE'
}))

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(routeController)
module.exports = app

