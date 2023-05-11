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
      },

      view(faculty) {
        Object.values(store.faculties.bottom).forEach(key => {
          key.active = false;
        });
        faculty.active = true;
      }
    }
  }
</script>








<template>
  <section>
    <div class="ds-back">
      <div class="container">
        <div id="courses">
          <div class="ds-text">
            <img :src="getImage(store.courses.text.imgIcon)" class="ds-icon" alt="img">
            <h2>{{ store.courses.text.h2 }}</h2>
            <p>{{ store.courses.text.p }}</p>
            <button class="ds-button ds-1"> 
              <a class="ds-a" href="#">{{ store.courses.text.btn }}</a>
            </button>
          </div>
          <div class="ds-img">
            <img :src="getImage(store.courses.img)" alt="img">
          </div>
        </div>
      </div>
    </div>

    <div id="faculties">
      <div class="ds-top">
        <h2>{{ store.faculties.top.h2 }}</h2>
        <p>{{ store.faculties.top.p }}</p>
        <div class="ds-box-row">
          <div class="container">
            <div class="row">
              <div
                class="col"
                v-for="(faculty, i) of store.faculties.bottom"
                :key="i"
                @click="view(faculty)"
              >
                <div
                  class="ds-card"
                  :class="{'ds-active' : faculty.active}"
                >
                  <img :src="getImage(faculty.imgV2)" alt="faculty">
                  <h6>{{ faculty.h3 }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div
          class="ds-bottom"
          v-show="faculty.active"
          v-for="(faculty, i) of store.faculties.bottom"
          :key="i"
        >
          <img :src="getImage(faculty.img)" alt="img">
          <div class="ds-text">
            <h3>{{ faculty.h3 }}</h3>
            <p>{{ faculty.p }}</p>
            <button class="ds-button ds-2">Read more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="ds-waves"></div>
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
      height: 186px;
      background-image: url('../../assets/svg/svg-0.svg');
    }

    .ds-back {
      background-image: url('../../assets/img/home-background.png');

      #courses {
        @include flex('vertical');
        padding: 100px 0;
      }
    }


    #faculties {
      @include flex('vertical');
      flex-direction: column;
      width: 100%;
      padding: 100px 0;
      .ds-top {
        width: 100%;
        text-align: center;

        .ds-box-row {
          box-shadow: 0 0 15px $border-4;

          .col {
            padding: 0;

            .ds-card {
              padding: 40px 50px;
              border: 1px solid $border-4;
              cursor: pointer;
              
              img {
                width: 80px;
              }
    
              h6 {
                margin-top: 15px;
                color: $text-5;
              }
            }

              .ds-active {
                background-color: $background-6;

                h6 {
                  color: $text-1;
                }

                img {
                  filter: brightness(0) invert(1);
                }
              }
          }
        }
      }
      .ds-bottom {
        @include flex;
        width: 100%;
      }
    }
  }
</style>