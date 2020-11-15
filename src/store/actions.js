import services from '../services/services'

const actions = {

  fetchAllItems : (context) => {
    return new Promise((resolve, reject) => {
      services.fetchAllItemsAPI()
      .then(response => {
        context.commit('SET_ALL_ITEMS', response.data)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  fetchOneItem : (context, id) => {
    return new Promise((resolve, reject) => {
      services.fetchOneItemAPI(id)
      .then(response => {
        context.commit('SET_ONE_ITEM', response.data)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  updateOneItem : (context, payload) => {
    return new Promise((resolve, reject) => {
      services.updateOneItemAPI(payload.id, payload.data)
      .then(() => {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  addAnItem : (context, payload) => {
    return new Promise((resolve, reject) => {
      services.addAnItemAPI(payload)
      .then(() => {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  deleteOneItem : (context, id) => {
    return new Promise((resolve, reject) => {
      services.deleteOneItemAPI(id)
      .then(() => {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  postOneOrder : (context, payload) => {
    return new Promise((resolve, reject) => {
      services.postOneOrderAPI(payload)
      .then(() => {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  fetchAllOrders : (context) => {
    return new Promise((resolve, reject) => {
      services.fetchAllOrdersAPI()
      .then((response) => {
        context.commit('SET_ALL_ORDERS', response.data)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  fetchOneOrder : (context, id) => {
    return new Promise((resolve, reject) => {
      services.fetchOneOrderAPI(id)
      .then(response => {
        context.commit('SET_ONE_ORDER', response.data)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  completeOneOrder : (context, payload) => {
    payload.status = 'Completed'
    return new Promise((resolve, reject) => {
      services.completeOneOrderAPI(payload)
      .then(response => {
        context.commit('SET_ONE_ORDER', response.data)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  addItemToCart : (context, id) => {
    const item = context.state.itemsToShow.find(item => {
      return item._id === id
    })
    item.count = 1
    context.commit('ADD_ITEM_TO_CART', item)
  },
  removeItemFromCart : (context, id) => {
    const itemIndex = context.state.cart.findIndex(item => {
      return item._id === id
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