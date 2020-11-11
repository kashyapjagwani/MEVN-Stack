const getters = {
  getAllItemsInCart : (state) => {
    return state.cart;
  },
  getAllItems : (state) => {
    return state.itemsToShow;
  },
}

export default getters