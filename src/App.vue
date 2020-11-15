<template>
  <div id="app">
    <notifications group="foo" position="top center" />
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Notifications from 'vue-notification'

Vue.component('Loading', Loading)
Vue.component('Notifications', Notifications)

export default {

}
</script>
<style lang="scss">

@import './assets/css/fontawesome-all.min.css';
@import './assets/css/main.css';
@import './assets/css/noscript.css';
</style>
