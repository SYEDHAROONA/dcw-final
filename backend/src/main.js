const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.port || 8000
const axios = require('axios')
const jwt = require('jsonwebtoken')
const TOKEN_SECRET = '28497fa99673d3eb93435beb2ca9a661c7645c6ba3adbd0bdc01539c019163dbc41c5c16dc949ea6e20c0cd590e71ce9bfa5352ff456e54bf22e7855bfdae974'

require('dotenv').config()
const User = require('./user')
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
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

app.post('/api/fblogin', bodyParser.json(), async (req, res) => {
  let token = req.body.token
  let result = await axios.get('https://graph.facebook.com/me',{
    params: {
      fields: 'id,name,email',
      access_token: token
    }
  })
  console.log(result.data)
  if(!result.data.id){
    res.sendStatus(403)
    return
  }
  let data = {
      username: result.data.email
  }
  let access_token = jwt.sign(data, TOKEN_SECRET, {expiresIn: '1800s'})
  res.send({access_token,username: data.username})
  }
)