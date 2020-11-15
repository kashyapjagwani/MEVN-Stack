<template>
  <div id="main">

    <!-- Admin Post -->
    <article class="post featured">
      <header class="major">
        <h2>Order Details</h2>
      </header>
    </article> 

    <ul class="actions special" v-if="getOneOrder && checkLive(getOneOrder.status)">
      <li @click="completeOrder">
        <div class="button">
          Mark as Complete 
        </div>
      </li>
    </ul>
    <!-- Orders Details -->
    <div v-if="getOneOrder">
      <h3>Customer Name: {{getOneOrder.customer_name}}</h3>
      <h3>Customer Phone: {{getOneOrder.customer_phone}}</h3>
      <h3>Total Order Amount: ₹{{getOneOrder.total_amount}}</h3>
      <h3>
        Status: 
        <span :class="{
        'classLive': checkLive(getOneOrder.status),
        'classCompleted': !checkLive(getOneOrder.status)
      }
      ">
          {{getOneOrder.status}}
        </span>
      </h3>
      <h3>Items:</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
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
    <Loading :active='isLoading' loader="bars" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    this.init()
  },
  computed: {
    ...mapGetters([
      'getOneOrder'
    ])
  },
  methods: {
    ...mapActions([
      'fetchOneOrder',
      'completeOneOrder'
    ]),
    init() {
      this.isLoading = true
      this.fetchOneOrder(this.$route.params.id)
      .then(() => {
        this.isLoading = false
      })
      .catch((err) => {
        this.isLoading = false
        alert(err)
      })
    },
    completeOrder() {
      this.isLoading = true
      Promise.all([
        this.completeOneOrder(this.getOneOrder),
        this.fetchOneOrder(this.$route.params.id)
      ])
      .then(() => {
        this.isLoading = false
      })
      .catch((err) => {
        this.isLoading = false
        alert(err)
      })
    },
    checkLive(status) {
      if(status === 'Live') {
        return true
      }
      else {
        return false
      }
    },
  }
}
</script>

<style lang="scss" scoped>
h3 {
  text-transform: none !important;
}
.classLive {
  color: darkgreen
}
.classCompleted {
  color: red
}
</style>