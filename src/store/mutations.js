import Vue from 'vue'

const mutations = {
  ADD_ITEM_TO_CART : (state, item) => {
    let cart = state.cart
    cart.push(item)
    Vue.set(state, 'cart', cart)
  },
  REMOVE_ITEM_FROM_CART : (state, itemIndex) => {
    let cart = state.cart
    cart.splice(itemIndex, 1)
    Vue.set(state, 'cart', cart)
  },
  ADD_ITEM : (state, id) => {
    const item = state.cart.find(item => {
      return item.id === id
    })
    item.count = item.count + 1
    let cart = state.cart
    cart.splice(
      cart.findIndex(item => {
        return item.id === id
      }),
      1,
      item
    );
    Vue.set(state, 'cart', cart)
  },
  REMOVE_ITEM : (state, id) => {
    const item = state.cart.find(item => {
      return item.id === id
    })
    item.count = item.count - 1
    let cart = state.cart
    cart.splice(
      cart.findIndex(item => {
        return item.id === id
      }),
      1,
      item
    );
    Vue.set(state, 'cart', cart)
  },
}

export default mutations