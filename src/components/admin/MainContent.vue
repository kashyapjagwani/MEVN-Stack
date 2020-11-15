<template>
  <div id="main">

    <!-- Admin Post -->
    <article class="post featured">
      <header class="major">
        <h2>Add new Items to the menu or<br> check your orders</h2>
      </header>
    </article> 

    <!-- View Menu or View Orders -->
    <section class="posts">
      <article>
        <header>
          <h2>View Menu</h2>
        </header>
        <ul class="actions special">
          <li>
            <router-link to="/admin/menu" class="button">
              View 
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
      </article>
      <article>
        <header>
          <h2>View Orders</h2>
        </header>
        <ul class="actions special">
          <li>
            <router-link to="/admin/orders" class="button">
              View 
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
      </article>
    </section>
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