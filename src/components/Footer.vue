<script>
  export default {
    name: 'Footer'    
  }
</script>








<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="ds-left">
            <img class="ds-logo" src="../assets/img/theme_eduprime_logo.png" alt="logo">
            <p>
              EduPrime is the most versatile WordPress theme for educational purposes, showcasing universitiesm courses, secondary schools etc.
            </p>
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
  
        <div class="col">
          <ul>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
          </ul>
        </div>
        
        <div class="col">
          <ul>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
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
            <h6>search</h6>
            <div class="ds-tag">text</div>
            <div class="ds-tag">text</div>
            <div class="ds-tag">text</div>
            <span>all rights</span>
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
      }
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
        background-color: $border-5;
      }
    
    }

  }

</style>