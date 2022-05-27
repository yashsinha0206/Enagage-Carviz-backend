const mongoose = require('mongoose')
const { cars_db } = require('../../../services/db.connection')

const schema = new mongoose.Schema({})

module.exports.Cars = cars_db.model('cars',schema,'cars')