<script>
  import {store} from './store';
  import Header from './components/Header.vue';
  import Jumbo from './components/Jumbo.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  export default {
    name: 'App',
    
    components: {
      Header,
      Jumbo,
      Main,
      Footer
    },

    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <Header/>
  <Jumbo/>
  <Main/>
  <Footer/>
</template>

<style lang="scss">
  @import './scss/main.scss';
</style>