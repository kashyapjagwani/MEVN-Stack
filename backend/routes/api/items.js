const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items)
    })
})

// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  })

  newItem.save()
    .then((item) => {
      res.json(item)
    })
    .catch((err) => {
      console.log(err)
    })
})

// @route   DELETE api/items/delete/:id
// @desc    Delete an item
// @access  Public
router.delete('/delete/:id', (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      item.remove()
      .then(() => {
        res.json({
          success: true
        })
      })
    })
    .catch((err) => {
      res.status(404).json({
        success: false
      })
    })
})

// @route   PATCH api/items/update/:id
// @desc    Update an item
// @access  Public
router.patch('/update/:id', (req, res) => {
  Item.updateOne({_id: req.params.id}, {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
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