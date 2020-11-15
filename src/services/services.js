import axios from 'axios';
export default {
    
  // Get functions
  fetchAllItemsAPI() {
    return axios.get('/api/items')
  },
  fetchOneItemAPI(id) {
    return axios.get(`/api/items/${id}`)
  },
  fetchAllOrdersAPI() {
    return axios.get('/api/orders')
  },
  fetchOneOrderAPI(id) {
    return axios.get(`/api/orders/${id}`)
  },
  
  // Create functions
  addAnItemAPI(data) {
    return axios.post('/api/items', {
      data
    })
  },
  postOneOrderAPI(data) {
    return axios.post('/api/orders', {
      data
    })
  },

  // Update functions
  updateOneItemAPI(id, data) {
    return axios.patch(`/api/items/update/${id}`, {
      data
    })
  },
  completeOneOrderAPI(data) {
    return axios.patch(`/api/orders/update/${data._id}`, {
      data
    })
  },
  // Delete functions
  deleteOneItemAPI(id) {
    return axios.delete(`/api/items/delete/${id}`)
  }
}