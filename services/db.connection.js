const mongoose = require('mongoose')
const env = require('../env')

var inst1 = mongoose.createConnection(`mongodb://localhost:27017/engage`)
module.exports.cars_db = inst1

