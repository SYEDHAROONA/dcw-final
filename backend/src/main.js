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
const User = require('./schema/user')
const Parcel = require('./schema/parcel')
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('user management service is online...')
})

app.post('/api/delete', (req, res) => {
  Parcel.deleteOne({parcel,telNum,parcelNumber,detail,reason}).then(result => res.send(result))
  console.log('here')
})

app.post('/api/find', (req, res) => {
  let parcel = {
    parcel: req.body.parcel,
    telNum: req.body.telNum,
    parcelNumber: req.body.parcelNumber,
    detail: req.body.detail,
    reason: req.body.reason
  }
  Parcel.findOne(parcel).then(result => res.send(result))
  console.log('here')
})

app.post('/api/update', (req, res) => {
  let filter = {
    parcel: req.body.oldParcel.parcel,
    telNum: req.body.oldParcel.telNum,
    parcelNumber: req.body.oldParcel.parcelNumber,
    detail: req.body.oldParcel.detail,
    reason: req.body.oldParcel.reason
  }
  let newParcel = {
    parcel: req.body.newParcel.parcel,
    telNum: req.body.newParcel.telNum,
    parcelNumber: req.body.newParcel.parcelNumber,
    detail: req.body.newParcel.detail,
    reason: req.body.newParcel.reason
  }
  Parcel.updateOne(filter, newParcel).then(result => res.send(result))
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

app.post('/api/testParcel', (req, res) => {
  const parcel = new Parcel({
    _id: new mongoose.Types.ObjectId,
    parcel: req.body.parcel,
    telNum: req.body.telNum,
    parcelNumber: req.body.parcelNumber,
    detail: req.body.detail,
    reason: req.body.reason
  })
  parcel.save().then(doc => res.send(doc))
})