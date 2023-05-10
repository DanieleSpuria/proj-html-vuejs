<script>
  export default {
    name: 'Header'    
  }
</script>








<template>
  <header>
    <img src="" alt="logo">
    <div class="ds-nav-bar">
      <nav>
        <ul>
          <li class="dropdown-toggle">
            text
            <ul class="dropdown-menu">
              <li class="dropdown-item">drop</li>
              <li class="dropdown-item">drop</li>
              <li class="dropdown-item">drop</li>
              <li class="dropdown-item">drop</li>
              <li class="dropdown-item">drop</li>
            </ul>
          </li>
          <li>text</li>
          <li>text</li>
          <li>text</li>
          <li>text</li>
          <li>text</li>
          <li>text</li>
        </ul>
      </nav>

      <button>BUTTON</button>
    </div>
  </header>
</template>








<style lang="scss" scoped>
  @use '../scss/partials/mixin' as *;

  header {
    @include flex('vertical');
    justify-content: space-between;
    padding: 50px 40px;

    border: 1px solid black;


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
</style>