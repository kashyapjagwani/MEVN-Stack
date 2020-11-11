const mutations = {
  ADD_ITEM : (state, id) => {
    const item = state.itemsToShow.find(item => {
      return item.id === id
    })
    item.count = item.count + 1
  },
  REMOVE_ITEM : (state, id) => {
    const item = state.itemsToShow.find(item => {
      return item.id === id
    })
    item.count = item.count - 1
  },
}

export default mutations