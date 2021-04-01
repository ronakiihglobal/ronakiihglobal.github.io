<template>
  <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">Ronak@IIHGlobal</nuxt-link>
        <button v-on:click="showMobileMenu = !showMobileMenu" class="button navbar-burger" aria-label="menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showMobileMenu }">
        <div class="navbar-end">
        
        <!--
          <div class="navbar-item is-hoverable">
            <nuxt-link class="navbar-item" to="/">How it Works</nuxt-link>
          </div>


          <div class="navbar-item is-hoverable">
            <nuxt-link class="navbar-item" to="/">About Us</nuxt-link>
          </div>

        -->

          <div class="navbar-item is-hoverable">
            <nuxt-link class="navbar-item" to="/blog/">Blogs</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        showMobileMenu: false
      }
    }
  }
</script>
<style>

.section {
  margin-top:25px;
}

article {
  margin-top:25px;
}
</style>
