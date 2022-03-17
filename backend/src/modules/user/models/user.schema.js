const mongoose =require('mongoose')
const {Schema} = mongoose
const StatusEnum = require('../../../common/status.enum')

const userSchema = Schema({
    first: {
         type: String,
         require: true
    },
    lastname: {
        type: String,
        require: true
    }
    age: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        default: StatusEnum.ACTIVE
    }
},{timestamp: true})

module.exports = mongoose.model('users',userSchema)