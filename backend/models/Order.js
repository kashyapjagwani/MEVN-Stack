const mongoose  = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const OrderSchema = new Schema({
  items: {
    type: Array,
    required: true
  }
})

module.exports = Order = mongoose.model('order', OrderSchema)