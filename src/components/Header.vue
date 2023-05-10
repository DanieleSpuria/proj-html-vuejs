<script>
  import Jumbo from './partials/Jumbo.vue';
  export default {
    name: 'Header',
    
    components: {
      Jumbo
    },

    methods: {
      getImage(img) {
        return new URL (`../assets/img/${img}`, import.meta.url).href
      }
    }
  }
</script>








<template>
  <header>
    <div class="ds-header-top">
      <img class="logo" src="../assets/img/theme_eduprime_logo.png" alt="logo">
      <div class="ds-nav-bar">
        <nav>
          <ul>
            <li class="dropdown-toggle">
              <a href="#"></a>
              <ul class="dropdown-menu">
                <li class="dropdown-item">drop</li>
              </ul>
            </li>
          </ul>
        </nav>
  
        <button>BUTTON</button>
      </div>
    </div>

    <img class="jumbo-slider" :src="getImage('theme_slider1_bg-1.jpg')" alt="">

    <div class="ds-header-bottom">
      <Jumbo/>
    </div>
  </header>
</template>








<style lang="scss" scoped>
  @use '../scss/partials/mixin' as *;
  @use '../scss/partials/var' as *;

  header {
    position: relative;
    background-color: $background-6;

    .jumbo-slider {
      position: absolute;
      top: 0;
      opacity: .2;
    }

    .ds-header-top {
      @include flex('vertical');
      justify-content: space-between;
      padding: 50px;
      
      .logo {
        width: 270px
      }

      .ds-nav-bar {
        @include flex;
  
        nav {
          @include flex;
  
          ul {
            @include flex;
            margin-bottom: 0;
            padding-left: 0;
  
            .dropdown-toggle {
              
              &:hover > .dropdown-menu {
                display: block;
              }
  
              .dropdown-menu{
                display: none;
  
              }
            }
          }
        }
  
      }
    }
  }
</style>