<template>
  <div id="wrapper" class="fade-in">
    <Header titleLineOne="Checkout" titleLineTwo="" />
    <MainContent />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import MainContent from '../components/checkout/MainContent'

export default {
  components: {
    Header,
    MainContent
  }
}
</script>

<style>

</style>