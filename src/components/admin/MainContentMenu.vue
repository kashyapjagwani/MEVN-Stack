<template>
  <div id="main">

    <!-- Admin Post -->
    <article class="post featured" v-if="getAllItems.length > 0">
      <header class="major">
        <h2>Live Items</h2>
      </header>
    </article> 

    <article class="post featured" v-else>
      <header class="major">
        <h2>No Items in your menu</h2>
      </header>
      <i>Start by adding a few items now</i>
    </article> 

    <ul class="actions special">
      <li>
        <router-link to="/admin/add-item" class="button">
          Add Item 
        </router-link>
      </li>
    </ul>

    <!-- Items Table -->
    <div class="table-wrapper" v-if="getAllItems.length > 0 && !isLoading">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in getAllItems"
            :key="index"
            style="cursor: pointer;"
            @click="showItem(item._id)"
          >
            <td>{{item.name}}</td>
            <td>₹ {{item.price}}</td>
          </tr>
        </tbody>
      </table>
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
      'getAllItems'
    ])
  },
  methods: {
    ...mapActions([
      'fetchAllItems'
    ]),
    init() {
      this.isLoading = true
      this.fetchAllItems()
      .then(() => {
        this.isLoading = false
      })
      .catch((err) => {
        this.isLoading = false
        alert(err)
      })
    },
    showItem(id) {
      this.$router.push({
        name: 'ItemDetails',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>