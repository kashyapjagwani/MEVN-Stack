<template>
  <div id="wrapper" class="fade-in">
    <Header titleLineOne="Order Now" titleLineTwo="" />
    <MainContent />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import MainContent from '../components/order/MainContent'

export default {
  components: {
    Header,
    MainContent
  }
}
</script>

<style>

</style>