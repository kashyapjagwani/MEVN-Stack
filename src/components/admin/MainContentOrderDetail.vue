<template>
  <div id="main">

    <!-- Admin Post -->
    <article class="post featured">
      <header class="major">
        <h2>Order Details</h2>
      </header>
    </article> 

    <!-- Orders Details -->
    <h3>Customer Name: {{getOneOrder.customer_name}}</h3>
    <h3>Customer Phone: {{getOneOrder.customer_phone}}</h3>
    <h3>Total Order Amount: ₹{{getOneOrder.total_amount}}</h3>
    <h3>Items:</h3>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in getOneOrder.items"
            :key="index"
          >
            <td>{{item.name}}</td>
            <td>₹ {{item.price}}</td>
            <td>{{item.count}}</td>
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
      'getOneOrder'
    ])
  },
  methods: {
  
  }
}
</script>

<style lang="scss" scoped>

</style>