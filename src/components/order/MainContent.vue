<template>
  <!-- Main -->
  <div id="main">

    <!-- Menu Post -->
    <article class="post featured">
      <header class="major">
        <h2>Menu</h2>
      </header>
    </article>    

    <!-- Note -->
    <div class="box box-new">
      <!-- Cart -->
      <ul class="actions special">
        <li>
          <router-link to="/order" class="button">
            Cart (0) 
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </router-link>
        </li>
      </ul>
      <h5>
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        Note: Your cart will be emptied if you leave our site.
      </h5>
    </div>  

    <!-- Menu -->
    <section class="posts">
      <article
        v-for="(item, index) in getAllItems"
        :key="index"
      >
        <header>
          <h2>{{item.name}}</h2>
        </header>
        <!-- <a href="#" class="image fit"><img src="../../assets/images/featured-loaf2.jpg" alt="" /></a> -->
        <i>
          {{item.description}}  
        </i>
        <br>
        <h4 style="margin: 0">
          ₹ {{item.price}}
        </h4>
        <br>
        <ul class="actions special">
          <li>
            <div class="button" :class="{'disabled':item.count<1}" @click="removeItem(item.id)">
              <i class="fa fa-minus" aria-hidden="true"></i>            
            </div>
          </li>
          <li>
            <div>
              {{item.count}}
            </div>
          </li>
          <li>
            <div class="button" @click="addItem(item.id)">
              <i class="fa fa-plus" aria-hidden="true"></i>            
            </div>
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
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

export default {
  data() {
    return {
  
    }
  },
  created() {
    console.log(this.getAllItems)
  },
  computed: {
    ...mapGetters([
      'getAllItems'
    ]),
  },
  methods: {
    ...mapActions([
      'addItem',
      'removeItem'
    ])
  }
}
</script>

<style lang="scss" scoped>
.box-new {
  margin: 0 2em 2em 2em !important; 
  padding: 2em !important; 
  text-align: center; 
  position: sticky; 
  top: 0;
  background: #ffffff;
  z-index: 3;
}
</style>

