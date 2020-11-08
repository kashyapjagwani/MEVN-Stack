<template>
  <div id="wrapper" class="fade-in">
    <Header />
    <MainContent />
    <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/home/Header'
import MainContent from '../components/home/MainContent'
import Footer from '../components/home/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    MainContent,
    Footer
  }
}
</script>
