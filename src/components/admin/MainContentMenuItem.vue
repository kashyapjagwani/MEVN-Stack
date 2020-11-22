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
      <li @click="deleteItem">
        <div class="button" v-if="!isEditable">
          Delete 
        </div>
      </li>
    </ul>
    <form v-if="isEditable">
      <div class="fields">
        <div class="field">
          <label for="name">Name *</label>
          <input v-model="editItem.name" placeholder="Enter the name" type="text" />
        </div>
        <div class="field">
          <label for="price">Price *</label>
          <input v-model.number="editItem.price" placeholder="Enter the price" type="number" min="0" max="9999999999" />
        </div>
        <div class="field">
          <label for="description">Description *</label>
          <textarea placeholder="Enter the description" v-model="editItem.description" rows="3"></textarea>
        </div>
      </div>
      <ul class="actions">
        <li>
          <div class="button" @click="updateItem">
            Save
          </div>
        </li>
      </ul>
    </form>

    <div v-else-if="getOneItem">
      <h2 style="text-transform: none;">Name: {{getOneItem.name}}</h2>
      <h2 style="text-transform: none;">Price: ₹ {{getOneItem.price}}</h2>
      <h2 style="text-transform: none;">Description:</h2>
      <i>{{getOneItem.description}}</i>
    </div>
    <footer>
    </footer>
    <Loading :active='isLoading' loader="bars" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      isLoading: true,
      isEditable: false,
      editItem: {}
    }
  },
  created() {
    this.init()
  },
  computed: {
    ...mapGetters([
      'getOneItem'
    ])
  },
  methods: {
    ...mapActions([
      'fetchOneItem',
      'updateOneItem',
      'deleteOneItem'
    ]),
    init() {
      this.isLoading = true
      this.fetchOneItem(this.$route.params.id)
      .then(() => {
        this.isLoading = false
      })
      .catch(err => {
        this.isLoading = false
        alert(err)
      })
    },
    updateItem() {
      if(!(this.editItem.name !== '' && this.editItem.price !== '' && this.editItem.description !== '')) {
        this.$notify({
          group: 'foo',
          title: 'Invalid Information',
          text: 'Please enter all the details',
          type: 'error',
        });
      }
      else {
        this.isLoading = true
        let payload = {
          id: this.$route.params.id,
          data: this.editItem
        }
        Promise.all([
          this.updateOneItem(payload),
          this.fetchOneItem(this.$route.params.id)
        ])
        .then(() => {
          this.isLoading = false
          this.isEditable = false
        })
        .catch((err) => {
          this.isLoading = false
          this.isEditable = false
          alert(err)
        })
      }
    },
    deleteItem() {
      console.log('hi')
      this.isLoading = true
      this.deleteOneItem(this.$route.params.id)
      .then(() => {
        this.isLoading = false
        this.$router.push({
          name: 'Menu'
        })
      })
      .catch((err) => {
        this.isLoading = false
        alert(err)
      })
    },
    toggleEdit() {
      this.isEditable = !this.isEditable
      if(this.isEditable && this.getOneItem) {
        Object.assign(this.editItem, this.getOneItem)
      }
    }
  }
}
</script>

<style>

</style>