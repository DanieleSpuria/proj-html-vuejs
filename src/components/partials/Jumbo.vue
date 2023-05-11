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

        <button class="ds-button ds-1">
          <i class="fa-solid fa-magnifying-glass"></i>
          Search courses
        </button>

        <button class="ds-button ds-plus">
          <i class="fa-solid fa-user-plus"></i>
          Apply for university
        </button>
      </div>
    </div>

    <i class="fa-solid fa-chevron-right arrow" @click="click(store.counter++)"></i>

  </div>
</template>








<style lang="scss" scoped>
@use '../../scss/partials/var' as *;
@use '../../scss/partials/mixin' as *;

  .ds-jumbo {
    @include flex('vertical');
    justify-content: space-between;
    padding: 80px 30px;
    text-align: center;
    
    &:hover .arrow {
      opacity: 1;
    }
    
    .arrow {
      opacity: 0;
      font-size: 40px;
      cursor: pointer;
      transition: all .7s ease-in;
    }

    .ds-box-jumbo {
      padding: 0 600px;

      h1,
      p {
        margin-bottom: 50px;
      }

      .ds-button.ds-1:hover {
        color: $text-5;
        background-color: $background-1;
      }
      
      .ds-button.ds-plus {
        margin-left: 34px;  
        color: $text-5;
        background-color: $background-1;

        &:hover {
          color: $text-1;
          background-color: $background-5;
        }
      }
      
      h1 {
        animation: h1 .8s;
      }
      
      p {
        animation: p 1.4s;
      }

      button {
        animation: btn 2.6s;
      }
      
      @keyframes h1 {
        0% {transform: scale(0); opacity: 0};
        100% {transform: scale(1); opacity: 1}
      }
      
      @keyframes p {
        0% {transform: scale(0); opacity: 0};
        20% {transform: scale(0); opacity: 0};
        100% {transform: scale(1); opacity: 1}
      }
      
      @keyframes btn {
        0% {transform: scale(0); opacity: 0};
        20% {transform: scale(0); opacity: 0};
        100% {transform: scale(1); opacity: 1}
      }
    }
  }
</style>