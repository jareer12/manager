const express = require('express')
const app = express()

import NodeJsRoute from '../routes/node'
import Body from 'body-parser'

app.use(Body.urlencoded({ extended: false }))
app.use(Body.json())

app.use('/node', NodeJsRoute)

app.listen(3000, () => {
  console.log('Listening on http://0.0.0.0:3000')
})
