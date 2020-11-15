<template>
  <div id="wrapper" class="fade-in">
    <Header titleLineOne="Welcome Admin" titleLineTwo="" />
    <MainContent />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import MainContent from '../components/admin/MainContentOrderDetail'

export default {
  components: {
    Header,
    MainContent
  }
}
</script>

<style>

</style>