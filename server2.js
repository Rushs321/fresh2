#!/usr/bin/env node
'use strict'


const app = require('express')()
const proxy = require('./src/proxy1')

const PORT = process.env.PORT || 8080


app.get('/', proxy)
app.get('/favicon.ico', (req, res) => res.status(204).end())
app.listen(PORT, () => console.log(`Worker ${process.pid}: Listening on ${PORT}`))
