<script>
  import {store} from '../store';
  export default {
    name: 'Footer',
    
    data() {
      return {
        store
      }
    }
  }
</script>








<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="ds-left">
            <img class="ds-logo" src="../assets/img/theme_eduprime_logo.png" alt="logo">
            <p>{{store.p}}</p>
            <div class="ds-social">
              <div class="ds-circle">
                <i class="fa-brands fa-facebook-f"></i>
              </div>

              <div class="ds-circle">
                <i class="fa-brands fa-twitter"></i>
              </div>

              <div class="ds-circle">
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
  
        <div
          class="col"
          v-for="(menu, i) of store.footerMenu"
          :key="i"
        >
          <ul>
            <h3>{{ menu.name }}</h3>
            <li
              class="ds-footer-menu"
              v-for="(li, liI) of menu.menu"
              :key="liI" 
            >
              <a href="#">{{ li }}</a>
            </li>
          </ul>
        </div>
        
        <div class="col">
          <div class="ds-search">
            <div class="ds-search-bar">
              <input type="text" placeholder="Search...">
              <div class="ds-circle ds-glass">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div class="ds-categories">
            <h6>Search categories</h6>
            
            <div class="ds-box-tag">
              <div
                class="ds-tag"
                v-for="(tag, i) of store.footerTag"
                :key="i"
              >
                <a href="#">{{ tag }}</a>
              </div>
            </div>
              
            <span>ModelTheme. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>








<style lang="scss" scoped>
  @use '../scss/partials/mixin' as *;
  @use '../scss/partials/var' as *;

  footer {
    padding: 150px;
    color: $text-1;
    background-color: $background-6;

    .ds-left {

      .ds-social {
        display: flex;

        .ds-circle {
          border: 2px solid $border-5;
          background-color: $background-6;

          &:hover {
            background-color: $background-5;
          }
        }
      }
    }

    .ds-footer-menu:hover a{
      color: $text-3;
    }

    .ds-search-bar {
      display: flex;
      justify-content: space-between;
      width: 370px;
      height: 75px;
      padding-left: 25px;
      background-color: $background-1;
      border-radius: 50px;

      input {
        border: none;
        border-radius: 50px;
        color: $text-6;
      }
  
      .ds-circle.ds-glass {
        margin-right: 0;
        width: 75px;
      }
    
    }

    .ds-categories {
      text-align:end;

      .ds-box-tag {
        display: flex;
        justify-content: end;
        flex-wrap: wrap;
        
        .ds-tag {
          margin-left: 10px;
          margin-top: 10px;
          padding: 8px 20px;
          border: 1px solid $border-1;
          border-radius: 50px;
          font-size: 11px;
          
          &:hover {
          background-color: $background-5;
          border: $border-5;
          }
        }
      }

      span {
        color: $text-3;
      }
    }

    a {
      text-decoration: none;
      color: $text-1;
    }
  }

</style>