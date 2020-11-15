import services from '../services/services'

const actions = {

  fetchAllItems : (context) => {
    services.fetchAllItemsAPI()
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  },
  addItemToCart : (context, id) => {
    const item = context.state.itemsToShow.find(item => {
      return item.id === id
    })
    item.count = 1
    context.commit('ADD_ITEM_TO_CART', item)
  },
  removeItemFromCart : (context, id) => {
    const itemIndex = context.state.cart.findIndex(item => {
      return item.id === id
    })
    context.commit('REMOVE_ITEM_FROM_CART', itemIndex)
  },
  addItem : (context, id) => {
    context.commit('ADD_ITEM', id)
  },
  removeItem : (context, id) => {
    context.commit('REMOVE_ITEM', id)
  },
}

export default actions