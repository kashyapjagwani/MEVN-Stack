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

// @route   GET api/orders/:id
// @desc    Get one order
// @access  Public
router.get('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then((item) => {
      res.json(item)
    })
})

// @route   POST api/orders
// @desc    Create an order
// @access  Public
router.post('/', (req, res) => {
  const newOrder = new Order({
    items: req.body.data.items,
    customer_name: req.body.data.name,
    customer_phone: req.body.data.phone,
    customer_message: req.body.data.message,
    status: req.body.data.status,
    total_amount: req.body.data.total_amount
  })

  newOrder.save()
    .then((item) => {
      res.json(item)
    })
    .catch((err) => {
      console.log(err)
    })
})

// @route   PATCH api/orders/update/:id
// @desc    Update an order
// @access  Public
router.patch('/update/:id', (req, res) => {
  Order.updateOne({_id: req.params.id}, {
    status: req.body.data.status
  })
    .then((item) => {
      res.json(item)
    })
    .catch((err) => {
      res.status(404).json({
        success: false
      })
    })
})

module.exports = router