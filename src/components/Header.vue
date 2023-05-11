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
    <img class="ds-img-slider" :src="getImage(`theme_slider${store.counter}_bg-1.jpg`)" alt="img">
    
    <div class="ds-box-header">
      <div class="ds-header-top">
        <img class="ds-logo" src="../assets/img/theme_eduprime_logo.png" alt="logo">
        <div class="ds-nav-bar">
          <nav>
            <ul>
              <li
                class="dropdown"
                v-for="(li, i) of store.navMenu"
                :key="i"
              >
                <a href="#">{{ li.name }}</a>
                <i class="fa-solid fa-caret-down" v-if="li.menu"></i>
                <ul
                  class="dropdown-menu"
                  v-if="li.menu"
                >
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
    
          <button class="ds-button ds-1">VIEW COURSES</button>
        </div>
      </div>
      
      <div class="ds-header-bottom">
        <Jumbo/>
      </div>

      <div class="ds-waves"></div>
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

    .ds-waves {
      height: 133px;
      background-image: url('../assets/img/Wave-1.png');
    }

    .ds-box-header {
      background-color: #e56767d8;

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
    
              .dropdown {
                padding: 25px;
                
                &:hover > .dropdown-menu {
                  display: block;
                }

                .fa-solid {
                  padding: 8px;
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