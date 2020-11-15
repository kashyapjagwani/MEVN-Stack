const mongoose  = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const OrderSchema = new Schema({
  items: {
    type: Array,
    required: true
  },
  customer_name: {
    type: String,
    required: true
  },
  customer_phone: {
    type: Number,
    required: true
  },
  customer_message: {
    type: String,
    required: false
  },
  total_amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = Order = mongoose.model('order', OrderSchema)