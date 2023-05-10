<script>
  export default {
    name: 'Sub'
  }
</script>








<template>
  <section>
    <div class="container">
      <div id="sub">
        <h3>Subscribe Now to Our Newsletter !</h3>
        <div class="ds-search-bar">
          <input type="text" placeholder="Email address...">
          <div class="ds-circle ds-glass">
            <i class="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>








<style lang="scss" scoped>
  @use '../../scss/partials/mixin' as *;
  @use '../../scss/partials/var' as *;

  section {
    padding: 55px;
    color: $text-1;
    background-color: $background-6;

    #sub {
      @include flex('vertical');
      justify-content: space-around;

      .ds-search-bar {
        display: flex;
        justify-content: space-between;
        width: 470px;
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
        background-color: $background-5;
      }
    
    }
    }
  }
</style>