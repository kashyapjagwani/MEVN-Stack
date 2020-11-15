const express = require('express')
const router = express.Router()

// Order Model
const Order = require('../../models/Order')

// @route   GET api/orders
// @desc    Get all orders
// @access  Public
router.get('/', (req, res) => {
  Order.find()
    .then((orders) => {
      res.json(orders)
    })
})

// @route   POST api/orders
// @desc    Create an order
// @access  Public
router.post('/', (req, res) => {
  const newOrder = new Order({
    items: req.body.items,
    customer_name: req.body.name,
    customer_phone: req.body.phone,
    customer_message: req.body.message
  })

  newOrder.save()
    .then((item) => {
      res.json(item)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router