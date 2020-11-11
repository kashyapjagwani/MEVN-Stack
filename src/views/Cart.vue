<template>
  <div id="wrapper" class="fade-in">
    <Header titleLineOne="Your Cart" titleLineTwo="" />
    <MainContent />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import MainContent from '../components/cart/MainContent'

export default {
  components: {
    Header,
    MainContent
  }
}
</script>

<style>

</style>