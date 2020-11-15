const getters = {
  getAllItemsInCart : (state) => {
    return state.cart;
  },
  getAllItems : (state) => {
    return state.itemsToShow;
  },
  getOneItem : (state) => {
    return state.itemToShow;
  },
  getAllOrders: (state) => {
    return state.ordersToShow.reverse()
  },
  getOneOrder: (state) => {
    return state.orderToShow
  }
}

export default getters