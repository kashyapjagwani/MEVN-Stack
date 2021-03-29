<template>
  <div id="wrapper" class="fade-in">
    <MainContent />
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from '../components/home/MainContent';

export default {
  name: 'Home',
  components: {
    MainContent,
  },
};
</script>
