<template>
  <div id="main">

    <article class="post featured">
      <header class="major">
        <h2>View, edit, or delete Item</h2>
      </header>
    </article>

    <ul class="actions special">
      <li @click="toggleEdit" v-if="!isEditable">
        <div class="button">
          Edit 
        </div>
      </li>
      <li @click="toggleEdit" v-if="isEditable">
        <div class="button">
          Cancel 
        </div>
      </li>
      <li>
        <div class="button" v-if="!isEditable">
          Delete 
        </div>
      </li>
    </ul>
    <form v-if="isEditable">
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

    <div v-else>
      <h2>Name: Cake</h2>
      <h2>Price: ₹ 100</h2>
      <h2>Description:</h2>
      <i>Choclate cake</i>
    </div>
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
      isLoading: false,
      isEditable: false
    }
  },
  methods: {
    toggleEdit() {
      this.isEditable = !this.isEditable
    }
  }
}
</script>

<style>

</style>