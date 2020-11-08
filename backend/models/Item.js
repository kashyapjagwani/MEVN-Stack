const { Buffer } = require('buffer')
const mongoose  = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = Item = mongoose.model('item', ItemSchema)