const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = process.env.port || 8000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const userRouter = require('./modules/user/user.route')

app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send('user management service is online...')
})

app.listen(port, () => {
  console.log(`user management service is online... [PORT:${port}]`)
})