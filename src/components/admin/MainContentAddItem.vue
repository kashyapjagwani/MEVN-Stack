<template>
  <div id="main">
    <h2>Please fill in the Item details</h2>
    <form>
      <div class="fields">
        <div class="field">
          <label for="name">Name *</label>
          <input v-model="name" placeholder="Enter the name" type="text" />
        </div>
        <div class="field">
          <label for="price">Price *</label>
          <input v-model="price" placeholder="Enter the price" type="number" min="0" max="9999999999" />
        </div>
        <div class="field">
          <label for="description">Description *</label>
          <textarea placeholder="Enter the description" v-model="description" rows="3"></textarea>
        </div>
      </div>
      <ul class="actions">
        <li>
          <div class="button" @click="placeOrder">
            Add Item
          </div>
        </li>
      </ul>
    </form>
    <Loading :active='isLoading' loader="bars" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      name: '',
      price: null,
      description: '',
      isLoading: false
    }
  },
  methods: {
    placeOrder() {
      if(!this.name) {
        this.$notify({
          group: 'foo',
          title: 'Invalid Name',
          text: 'Please enter item name',
          type: 'error',
        });
      }
      else if(!this.price) {
        this.$notify({
          group: 'foo',
          title: 'Invalid Price',
          text: 'Please enter the item price',
          type: 'error',
        });
      }
      else if(!this.description) {
        this.$notify({
          group: 'foo',
          title: 'Invalid Description',
          text: 'Please enter the item description',
          type: 'error',
        });
      }
      else {
        this.isLoading = true
        let payload = {
          name: this.name,
          price: this.price,
          description: this.description,
        }
        setTimeout(() => {
          this.isLoading = false
          this.$router.push({
            name: 'Home'
          })
          this.$notify({
            group: 'foo',
            title: 'Yaay! The item has been added to your menu',
            text: 'You can now check it out in the menu',
            type: 'success',
          });
        }, 3000);
      }
    },
  }
}
</script>

<style>

</style>