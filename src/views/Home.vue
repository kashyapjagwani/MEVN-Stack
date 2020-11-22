<template>
  <div id="wrapper" class="fade-in">
    <Header />
    <MainContent />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/common/Header'
import MainContent from '../components/home/MainContent'

export default {
  name: 'Home',
  components: {
    Header,
    MainContent,
  }
}
</script>
