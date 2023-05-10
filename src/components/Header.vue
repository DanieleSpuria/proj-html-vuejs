<script>
  import {store} from '../store';
  import Jumbo from './partials/Jumbo.vue';
  export default {
    name: 'Header',
    
    components: {
      Jumbo
    },

    data() {
      return {
        store
      }
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
    <img class="ds-img-slider" :src="getImage('theme_slider1_bg-1.jpg')" alt="img">
    
    <div class="ds-box-header">
      <div class="ds-header-top">
        <img class="ds-logo" src="../assets/img/theme_eduprime_logo.png" alt="logo">
        <div class="ds-nav-bar">
          <nav>
            <ul>
              <li
                class="dropdown-toggle"
                v-for="(li, i) of store.navMenu"
                :key="i"
              >
                <a href="#">{{ li.name }}</a>
                <ul class="dropdown-menu">
                  <li
                    class="dropdown-item"
                    v-for="(liMenu, iMenu) of li.menu"
                    :key="iMenu"
                  >
                    <a href="#" class="ds-drop-a">{{ liMenu }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
    
          <button class="ds-button-1">VIEW COURSES</button>
        </div>
      </div>
      
      <div class="ds-header-bottom">
        <Jumbo/>
      </div>
    </div>
  </header>
</template>








<style lang="scss" scoped>
  @use '../scss/partials/mixin' as *;
  @use '../scss/partials/var' as *;


  .ds-img-slider {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

  header {
    position: relative;
    color: $text-1;
    overflow: hidden;

    .ds-box-header {
      background-color: #e56767ac;

      .ds-header-top {
        @include flex('vertical');
        justify-content: space-between;
        padding: 50px;
        
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
                  border: none;
   
                  .ds-drop-a {
                    color: $text-13;
                  }
                }
  
                a {
                  text-decoration: none;
                  color: $text-1;
                }
              }
            }
          }
    
        }
      }
    }
  }
</style>