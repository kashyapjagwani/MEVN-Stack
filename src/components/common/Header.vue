<template>
  <div>
    <!-- Intro -->
    <div id="intro">
      <h1>{{titleLineOne}}
        <br />
        {{titleLineTwo}}
      </h1>
      
      <!-- Logo -->
      <!-- <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" /> -->
      
      <ul class="actions">
        <!-- <li><a href="#header" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li> -->
      </ul>
    </div>

    <!-- Header -->
    <!-- <header id="header">
      <a href="index.html" class="logo">Massively</a>
    </header> -->
    
    <!-- Nav -->
    <!-- <nav id="nav">
      <ul class="links">
        <li class="active"><a href="index.html">This is Massively</a></li>
        <li><a href="generic.html">Generic Page</a></li>
        <li><a href="elements.html">Elements Reference</a></li>
      </ul>
      <ul class="icons">
        <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
        <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
export default {
  props: {
    titleLineOne: {
      type: String,
      default: 'This is'
    },
    titleLineTwo: {
      type: String,
      default: 'Massively'
    }
  },
}
</script>

<style>

</style>