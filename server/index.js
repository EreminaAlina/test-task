const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const axios = require('axios')
const config = require('./constants/config')

app.use(cors())

app.get('/map', async (req, res) => {
  const bob = await axios(`https://pro-api.coinmarketcap.com/v1/fiat/map`,
    {headers: {'X-CMC_PRO_API_KEY': config.SECRET_KEY}})
  res.json(bob.data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

