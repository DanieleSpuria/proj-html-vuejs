<script>
  import {store} from './store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import ButtonBottom from './components/partials/ButtonBottom.vue';
  export default {
    name: 'App',
    
    components: {
      Header,
      Main,
      Footer,
      ButtonBottom
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
  <Main/>
  <Footer/>
  <ButtonBottom/>
</template>








<style lang="scss">
  @import './scss/main.scss';
</style>