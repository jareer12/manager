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
        const error = err?.toString()
        switch (error) {
          case error.includes('No script path'): {
            res.errors.push('No script path')
          }
        }
      } else {
        console.log(apps)
      }
    })
  } catch (err) {}

  res.json({
    errors: res.errors,
  })
})

export default Router
