<script>
  export default {
    name: 'Sub'
  }
</script>








<template>
  <section>
    <div class="container">
      <div id="sub">
        <h3>subscribe</h3>
        <input type="text">
      </div>
    </div>
  </section>
</template>








<style lang="scss" scoped>
  @use '../../scss/partials/mixin' as *;

  section {
    border: 1px solid black;

    #sub {
      @include flex('vertical');
      justify-content: space-around;
      border: 1px solid black;
    }
  }
</style>