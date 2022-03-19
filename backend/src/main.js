const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = process.env.port || 8000
require('dotenv').config()
const User = require('./user')
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
console.log(process.env.DB_CONNECTION)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const userRouter = require('./modules/user/user.route')

app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send('user management service is online...')
})

app.post('/testDB', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    email: req.body.email
  })
  user.save().then(result => {
    console.log(result)
    res.send(result)
  })
  console.log('here')
})


app.listen(port, () => {
  console.log(`user management service is online... [PORT:${port}]`)
})