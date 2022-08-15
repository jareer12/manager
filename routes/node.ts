import { RequestNodeJsStartOptions } from '../types/index'
const Router = require('express').Router()
const PM2 = require('pm2')

Router.post('/start', (req, res) => {
  const options: RequestNodeJsStartOptions = req?.body
  console.log(options)

  if (!options) {
    res.status(400).send('options is required')
    return
  }

  try {
    PM2.start(options, (err, apps) => {
      if (err) {
        console.log(err)
        res.status(500).json({
          error: err.toString(),
        })
      } else {
        res.json({
          apps,
        })
      }
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err.toString(),
    })
  }
})

export default Router
