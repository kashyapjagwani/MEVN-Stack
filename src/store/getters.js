const getters = {
  getAllItemsInCart : (state) => {
    return state.cart;
  },
  getAllItems : (state) => {
    return state.itemsToShow;
  },
  getAllOrders: (state) => {
    return state.orders
  },
  getOneOrder: (state) => {
    return state.orders[0]
  }
}

export default getters