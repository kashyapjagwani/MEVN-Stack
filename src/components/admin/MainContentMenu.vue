<template>
  <div id="main">

    <!-- Admin Post -->
    <article class="post featured" v-if="getAllItems.length > 0">
      <header class="major">
        <h2>Live Items</h2>
      </header>
    </article> 

    <ul class="actions special">
      <li>
        <router-link to="/admin/add-item" class="button">
          Add Item 
        </router-link>
      </li>
    </ul>

    <!-- Items Table -->
    <div class="table-wrapper" v-if="getAllItems.length > 0">
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
            @click="showItem(item.id)"
          >
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  created() {
    console.log(this.fetchAllItems())
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