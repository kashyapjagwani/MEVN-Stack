import axios from 'axios';
export default {
    
  // Get functions
  fetchAllItemsAPI() {
    return axios.get('/api/items')
  },
  fetchOneItemAPI(id) {
    return axios.get(`/api/items/${id}`)
  },
  
  // Create functions
  addAnItemAPI(data) {
    return axios.post('/api/items', {
      data
    })
  },
  // Update functions
  updateOneItemAPI(id, data) {
    return axios.patch(`/api/items/update/${id}`, {
      data
    })
  }
  // Delete functions
    
}