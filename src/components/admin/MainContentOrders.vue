<template>
  <div id="main">

    <!-- Admin Post -->
    <article class="post featured" v-if="getAllOrders.length > 0">
      <header class="major">
        <h2>Live Orders</h2>
      </header>
    </article> 

    <!-- Orders Table -->
    <div class="table-wrapper" v-if="getAllOrders.length > 0">
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Phone</th>
            <th>Total Items</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in getAllOrders"
            :key="index"
            style="cursor: pointer;"
            @click="showOrder(order.id)"
          >
            <td>{{order.customer_name}}</td>
            <td>{{order.customer_phone}}</td>
            <td>
              {{totalItemsInOneOrder(order.items)}}
            </td>
            <td>{{order.total_amount}}</td>
            <td 
              :class="{
                'classLive': checkLive(order.status),
                'classCompleted': !checkLive(order.status)
              }
              "
            >
              {{order.status}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getAllOrders'
    ])
  },
  methods: {
    totalItemsInOneOrder(items) {
      let count = 0
      items.forEach(item => {
        count = count + item.count
      })
      return count
    },
    checkLive(status) {
      if(status === 'Live') {
        return true
      }
      else {
        return false
      }
    },
    showOrder(id) {
      this.$router.push({
        name: 'OrderDetails',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.classLive {
  color: darkgreen
}
.classCompleted {
  color: red
}
</style>