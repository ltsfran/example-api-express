const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      message: 'All users'
    })
  } catch(error) {
    console.error(error)
    return res.status(500).send('Internal server error')
  }
})

module.exports = router