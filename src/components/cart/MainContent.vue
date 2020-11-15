<template>
  <!-- Main -->
  <div id="main">

    <!-- Cart Post -->
    <article class="post featured" v-if="getAllItemsInCart.length > 0">
      <header class="major">
        <h2>You can edit your cart</h2>
      </header>
    </article>    

    <!-- Cart Table -->
    <!-- <h3>Default</h3> -->
    <div class="table-wrapper" v-if="getAllItemsInCart.length > 0">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in getAllItemsInCart"
            :key="index"
          >
            <td>{{item.name}}</td>
            <td>{{item.count}}</td>
            <td>₹ {{item.price * item.count}}</td>
            <td>
              <ul class="actions special">
                <li>
                  <div class="button small" :class="{'disabled':getItemCountInCart(item.id)<1}" @click="removeItem(item.id)">
                    <i class="fa fa-minus" aria-hidden="true"></i>            
                  </div>
                </li>
                <!-- <li>
                  <div>
                    {{item.count}}
                  </div>
                </li> -->
                <li>
                  <div class="button small" @click="addItem(item.id)">
                    <i class="fa fa-plus" aria-hidden="true"></i>            
                  </div>
                </li>
              </ul>
            </td>
          </tr>

        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">
              <b>Total Amount</b>
            </td>
            <td>
              <b>₹ {{getTotalAmount}}.00</b>
            </td>
          </tr>
        </tfoot>
      </table>
      <ul class="actions special">
        <li>
          <router-link class="button" to="/checkout">
            Checkout
          </router-link>
        </li>
      </ul>
    </div>

    <div v-else>
      <div class="main" style="text-align: center">
        <img src="https://cdn.pixabay.com/photo/2020/06/11/07/41/pie-5285645_960_720.jpg" style="width: 360px; height: 360px;">
      </div>  
      <header class="major" style="margin-bottom: 2rem;">
        <h2>Good stuff is always baking</h2>
        <p>Your cart is empty. Add someting from the menu.</p>
      </header>
      <ul class="actions special">
        <li>
          <router-link class="button" to="/order">
            Browse our menu
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Footer -->
    <footer>
      <!-- <div class="pagination">
        <a href="#" class="previous">Prev</a>
        <a href="#" class="page active">1</a>
        <a href="#" class="page">2</a>
        <a href="#" class="page">3</a>
        <span class="extra">&hellip;</span>
        <a href="#" class="page">8</a>
        <a href="#" class="page">9</a>
        <a href="#" class="page">10</a>
        <a href="#" class="next">Next</a>
      </div> -->
    </footer>

  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

export default {
  data() {
    return {
  
    }
  },
  watch: {
    itemsInCart: {
      handler(newItems, oldItems) {
        newItems.forEach(item => {
          if(item.count < 1) {
            this.removeItemFromCart(item.id)
          }
        })
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAllItemsInCart',
      'getAllItems'
    ]),
    ...mapState({
      itemsInCart : state => state.cart
    }),
    getTotalAmount() {
      let total = 0
      this.getAllItemsInCart.forEach(item => {
        total = total + (item.count * item.price)
      })
      return total
    }
  },
  methods: {
    ...mapActions([
      'addItemToCart',
      'removeItemFromCart',
      'addItem',
      'removeItem'
    ]),
    getItemCountInCart(id) {
      if(this.getAllItemsInCart.length) {
        const item = this.getAllItemsInCart.find(item => {
          return item.id === id
        })
        if(item) {
          return item.count
        }
      }
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
td, th {
  text-align: center;
}
</style>

