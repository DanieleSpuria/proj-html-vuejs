<script>
  import {store} from '../../store';
  export default {
    name: 'CourserFaculties',

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
  <section>
    <div class="container">
      <div id="courses">
        <div class="ds-text">
          <img :src="getImage(store.courses.text.img)" alt="img">
          <h2>{{ store.courses.text.h2 }}</h2>
          <p>{{ store.courses.text.p }}</p>
          <button class="ds-button-1"> 
            <a href="#">{{ store.courses.text.btn }}</a>
          </button>
        </div>
        <div class="ds-img">
          <img :src="getImage(store.courses.img)" alt="img">
        </div>
      </div>

      <div id="faculties">
        <div class="ds-top">
          <h2>faculties</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, error.
          </p>
          <div class="slide">SLIDE</div>
        </div>
        <div class="ds-bottom">
          <img src="" alt="img">
          <div class="ds-text">
            <h3>title</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ullam vel explicabo quo quis natus corporis, dolorem at necessitatibus! Reprehenderit?
            </p>
            <button>BUTTON</button>
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

    #courses {
        @include flex('vertical');

        .ds-text {

          img {
            width: 60px
          }
        }
      }

    #faculties {
      @include flex('vertical');
      flex-direction: column;
      width: 100%;
      border: 1px solid black;
      .ds-top {
        text-align: center;
      }
      .ds-bottom {
        @include flex;
        width: 100%;
        border: 1px solid black;
      }
    }

    a {
      text-decoration: none;
      color: $text-1;
    }
  }
</style>