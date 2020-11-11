const actions = {
  addItem : (context, id) => {
    context.commit('ADD_ITEM', id)
  },
  removeItem : (context, id) => {
    context.commit('REMOVE_ITEM', id)
  },
}

export default actions