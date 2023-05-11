<script>
  import {store} from '../../store';
  export default {
    name: 'LatestMethodFees',

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
    <div class="ds-waves"></div>

    <div class="container">
      <div id="latest">
        <h2>{{ store.latest.h2 }}</h2>
        <div class="row">
          <div
            class="col"
            v-for="(card, i) of store.latest.cards"
            :key="i"
          >
            <div class="ds-card">
              <img :src="getImage(card.img)" class="ds-icon" alt="img">
              <h3>{{ card.h3 }}</h3>
              <div class="ds-text-card">
                <i class="fa-regular fa-user"></i>
                <span>{{card.teacher}}</span>
              </div>
              <div class="ds-text-card">
                <i class="fa-regular fa-money-bill-1"></i>
                <span>{{card.price}}</span>
              </div>
              <button class="ds-button ds-2 ds-3">
                <a class="ds-a" href="#">
                  <i class="fa-solid fa-eye"></i>
                  View Courses
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div
        class="ds-exams"
        v-for="(exam, i) in store.exams"
        :key="i"
      >
        <div class="ds-text">
          <img :src="getImage(exam.imgIcon)" class="ds-icon" alt="img">
          <h2>{{ exam.h2 }}</h2>
          <p>{{ exam.p }}</p>
          <button class="ds-button ds-2">
            <a class="ds-a" href="#">{{ exam.btn }}</a>
          </button>
        </div>
        
        <img :src="getImage(exam.img)" alt="img">
      </div>
    </div>
  </section>
</template>








<style lang="scss" scoped>
  @use '../../scss/partials/mixin' as *;
  @use '../../scss/partials/var' as *;

  section {
    color: $text-13;

    h2,
    h3,
    p {
      margin-bottom: 40px;
    }

    .ds-waves {
      height: 177px;
      transform: rotate(.02deg) scale(1.1);
      background-image: url('../../assets/svg/svg-1.svg');
    }

    #latest {
      padding-top: 100px;

      .ds-card {
        position: relative;
        text-align: center;
        padding: 40px 30px;
        border-radius: 10px;
        box-shadow: 0 0 15px $border-4;

        button {
          box-shadow: 0 0 0;
        }
      }
    }

    .ds-exams {
      display: flex;
      padding-top: 100px;

      &:nth-of-type(3) {
        flex-direction: row-reverse;
        padding-bottom: 100px;
      }
    }
  }
</style>