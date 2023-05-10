<script>
  import {store} from '../../store';
  export default {
    name: 'Jumbo',

    data() {
      return {
        store
      }
    },

    methods: {
      getImage(img) {
        return new URL (`../../assets/img/${img}`, import.meta.url).href
      }
    }
  }
</script>








<template>
  <div class="ds-jumbo">

    <i class="fa-solid fa-chevron-left arrow"></i>

    <div class="ds-box-jumbo">
      
  
      <h1>Title</h1>
      <p>{{ store.p }}</p>
      <button class="ds-button ds-1">
        <i class="fa-solid fa-magnifying-glass"></i>
        Search courses
      </button>
      <button class="ds-button ds-plus">
        <i class="fa-solid fa-user-plus"></i>
        Apply for university
      </button>
    </div>

    <i class="fa-solid fa-chevron-right arrow"></i>

  </div>
</template>








<style lang="scss" scoped>
@use '../../scss/partials/var' as *;
@use '../../scss/partials/mixin' as *;

  .ds-jumbo {
    @include flex('vertical');
    justify-content: space-around;
    padding: 80px;
    text-align: center;

    .arrow {
      font-size: 40px;
      cursor: pointer;
    }

    h1,
    p {
      margin-bottom: 50px;
    }

    .ds-button-1.ds-plus {
      color: $text-5;
      background-color: $background-1;
    }
  }
</style>