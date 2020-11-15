<template>
  <div id="main">
    <h2>Please fill in your details</h2>
    <form>
      <div class="fields">
        <div class="field">
          <label for="name">Name *</label>
          <input v-model="name" placeholder="Enter you full name" type="text" />
        </div>
        <div class="field">
          <label for="email">Number *</label>
          <input v-model="phone" placeholder="Enter you phone number" type="number" min="0" max="9999999999" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea v-model="message" rows="3"></textarea>
        </div>
      </div>
      <ul class="actions">
        <li>
          <div class="button" @click="placeOrder">
            Place Order
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
      phone: null,
      message: '',
      isLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'getAllItemsInCart',
    ]),
  },
  methods: {
    placeOrder() {
      if(!this.name) {
        this.$notify({
          group: 'foo',
          title: 'Invalid Name',
          text: 'Please enter your full name',
          type: 'error',
        });
      }
      else if(!this.phone) {
        this.$notify({
          group: 'foo',
          title: 'Invalid Phone Number',
          text: 'Please enter your phone number',
          type: 'error',
        });
      }
      else if(this.phone.length < 10 || this.phone.length > 10) {
        this.$notify({
          group: 'foo',
          title: 'Invalid Phone Number',
          text: 'Please enter your 10 digit phone number',
          type: 'error',
        });
      }
      else {
        this.isLoading = true
        let payload = {
          name: this.name,
          phone: this.phone,
          message: this.message,
          items: this.getAllItemsInCart
        }
        setTimeout(() => {
          this.isLoading = false
          this.$router.push({
            name: 'Home'
          })
          this.$notify({
            group: 'foo',
            title: 'Yaay! Your order has been placed.',
            text: 'We will contact you shortly.',
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