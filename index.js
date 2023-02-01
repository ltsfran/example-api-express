const express = require('express')
const app = express()
const product = require('./api/product')
const users = require('./api/users')

app.use(express.json({ extended: false }))

app.use('/api/product', product)
app.use('/api/users', users)

const PORT = 3000
app.listen(PORT, () => console.log('Listen on PORT:', 3000))