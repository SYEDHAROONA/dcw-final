const mongoose = require('mongoose');

const parcelSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    parcel: String,
    telNum: String,
    parcelNumber: String,
    detail: String,
    reason: String
})

module.exports = mongoose.model('Parcel', parcelSchema);