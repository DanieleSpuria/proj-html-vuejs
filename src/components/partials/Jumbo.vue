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
      },

      click(prevNext) {
        if (store.counter === -1) store.counter = Object.keys(store.slideJumbo).length - 1;
        else if (store.counter === Object.keys(store.slideJumbo).length) store.counter = 0; 
        else prevNext; 
      },

      autoSlider() {
        this.click(store.counter++)
      }
    },

    mounted() {
      setInterval(this.autoSlider, 10000)
    }
  }
</script>








<template>
  <div class="ds-jumbo">

    <i class="fa-solid fa-chevron-left arrow" @click="click(store.counter--)"></i>

    <div class="ds-box-jumbo">
      <div
        class="ds-text"
        v-for="(slide, i, index) of store.slideJumbo"
        :key="i"
        v-show="index === store.counter"
      >
        <h1>{{ slide.h1 }}</h1>
        <p>{{ store.p }}</p>
      </div>
      <button class="ds-button ds-1">
        <i class="fa-solid fa-magnifying-glass"></i>
        Search courses
      </button>
      <button class="ds-button ds-plus">
        <i class="fa-solid fa-user-plus"></i>
        Apply for university
      </button>
    </div>

    <i class="fa-solid fa-chevron-right arrow" @click="click(store.counter++)"></i>

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