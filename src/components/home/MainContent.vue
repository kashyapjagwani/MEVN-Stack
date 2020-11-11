<template>
  <!-- Main -->
  <div id="main">

    <!-- Welcome Post -->
    <article class="post featured">
      <header class="major">
        <!-- <span class="date">April 25, 2017</span> -->
        <h2>Welcome to <br>Sparkling Sugar</h2>
        <b><i>A thoughtful expression of modern craft through good food and warm experiences...</i></b>
      </header>
      <!-- <a href="#" class="image main"><img src="images/pic01.jpg" alt="" /></a> -->
      <ul class="actions special">
        <li><a href="#" class="button large">Full Story</a></li>
      </ul>
      <!-- <div class="box">
        <i>Now accepting Thanksgiving Preorders
          <br>
          <a href="#">Place Order <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
        </i>
      </div> -->
    </article>    

      <!-- Covid 19 Update -->
      <article>
        <div class="box">
          <header class="major">
            <h2>COVID-19 Update</h2>
          </header>
          <!-- <a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a> -->
          <i>We are open and offer take-out and have online ordering available. Please stay home if you are feeling any flu like symptoms!
            <br>
            Thank you for your continued support!
          </i>
        </div>
        <!-- <ul class="actions special">
          <li><a href="#" class="button">Full Story</a></li>
        </ul> -->
      </article>

    <h1 style="text-align: center">Our Top Selling Items</h1>
    <section class="posts">
      <article>
        <header>
          <h2>It's Loaf Time</h2>
        </header>
        <a href="#" class="image fit"><img src="../../assets/images/featured-loaf2.jpg" alt="" /></a>
        <i>Spongy chocolate loaf drizzled with the chocolate of your choice (milk or white)! Just heat it and serve... 
          <br>Tatses best when served with vanilla icecream!
          <br>
          <b>Serves 2</b>  
        </i>
        <br>
        <ul class="actions special">
          <li>
            <router-link to="/order" class="button">
              Order Now 
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
      </article>
      <article>
        <header>
          <h2>Cupcake it is</h2>
        </header>
        <a href="#" class="image fit"><img src="../../assets/images/featured-cupcake.jpg" alt="" /></a>
        <i>Mini cupcake bites with dark chocolate or milk chocolate ganache frosting (as per preference).
          <br>
          <b>Serves 1</b>
        </i>
        <br><br>
        <ul class="actions special">
          <li>
            <router-link to="/order" class="button">
              Order Now 
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
      </article>
    </section>

    <!-- Footer -->
    <footer>
      <!-- <div class="pagination">
        <a href="#" class="previous">Prev</a>
        <a href="#" class="page active">1</a>
        <a href="#" class="page">2</a>
        <a href="#" class="page">3</a>
        <span class="extra">&hellip;</span>
        <a href="#" class="page">8</a>
        <a href="#" class="page">9</a>
        <a href="#" class="page">10</a>
        <a href="#" class="next">Next</a>
      </div> -->
    </footer>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>