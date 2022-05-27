const mongoose = require('mongoose')
const env = require('../env')

var inst1 = mongoose.createConnection(process.env.MONGODB_URL)
module.exports.cars_db = inst1

