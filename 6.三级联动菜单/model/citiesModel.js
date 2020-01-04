/*
* 该文件用于创建citiesModel，用于去操作CRUD
* */
const mongoose = require('mongoose')

const {Schema} = mongoose

const citiesRules = new Schema()

module.exports = mongoose.model('cities',citiesRules)
