<script>
  import {store} from '../../store';
  export default {
    name: 'YearMethod',

    data() {
      return {
        store
      }
    },

    methods: {
      getImage(img) {
        return new URL (`../../assets/img/${img}`, import.meta.url).href
      },
    }
  }
</script>








<template>
  <section>
    <div class="container">
      <div id="year">
        <img :src="getImage(store.year.img)" class="ds-icon" alt="img">
        <h2>{{ store.year.h2 }}</h2>
        <div class="ds-box">
          <div
            class="ds-box-text"
            v-for="(text, i) of store.year.textTop"
            :key="i"
          >
            <h5>{{ text.h5 }}</h5>
            <p>{{ text.p }}</p>
          </div>
        </div>
        <img :src="getImage(store.year.imgTime)" alt="img">
        <div class="ds-box">
          <div
            class="ds-box-text"
            v-for="(text, i) of store.year.textBottom"
            :key="i"
          >
            <h5>{{ text.h5 }}</h5>
            <p>{{ text.p }}</p>
          </div>
        </div>
      </div>
      
      <div id="event">
        <img src="" class="ds-icon" alt="img">
        <h2>event</h2>
        <div class="row">
          <div class="col">
            <div class="ds-card">
              <h3>title</h3>
              <i class="fa-regular fa-calendar-days"></i>
              <span>data</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsam.
              </p>
              <button>BUTTON</button>
            </div>
          </div>
          <div class="col">
            <div class="ds-card">
              <h3>title</h3>
              <span>data</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsam.
              </p>
              <button>BUTTON</button>
            </div>
          </div>
          <div class="col">
            <div class="ds-card">
              <h3>title</h3>
              <span>data</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsam.
              </p>
              <button>BUTTON</button>
            </div>
          </div>
        </div>
        
        <button>BUTTON</button>
      </div>
    </div>
  </section>  
</template>








<style lang="scss" scoped>
  @use '../../scss/partials/mixin' as *;
  @use '../../scss/partials/var' as *;

  section {
    color: $text-1;
    background-color: $background-6;

    #year {
        @include flex;
        flex-direction: column;
        text-align: center;

        .ds-box {
          display: flex;
          width: 60%;
        }
      }

   #event {
     text-align: center;
   }
  }
</style>