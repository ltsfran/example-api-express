const express = require('express')
const app = express()
const product = require('./api/product')

app.use(express.json({ extended: false }))

app.use('/api/product', product)

const PORT = 3000
app.listen(PORT, () => console.log('Listen on PORT:', 3000))