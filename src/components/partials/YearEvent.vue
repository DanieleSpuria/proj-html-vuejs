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
        <img :src="getImage(store.year.imgIcon)" class="ds-icon" alt="img">
        <h2>{{ store.year.h2 }}</h2>
        <div class="ds-box ds-top">
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
        <div class="ds-box ds-bottom">
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
        <img :src="getImage(store.event.imgIcon)" class="ds-icon" alt="img">
        <h2>{{ store.event.h2 }}</h2>
        <div class="row">
          <div
            class="col"
            v-for="(event, i) of store.event.cards"
            :key="i"
          >
            <div class="ds-card">
              <h3>{{ event.h3 }}</h3>
              <i class="fa-regular fa-calendar-days"></i>
              <span>{{ event.span }}</span>
              <p>{{ event.p }}</p>
              <button class="ds-button ds-2 ds-3">
                <i class="fa-solid fa-plus"></i>
                Find More
              </button>
            </div>
          </div>
        </div>
        
        <button class="ds-button ds-1">View All Events</button>
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
    
    h2,
    h3,
    p {
      margin-bottom: 40px;
    }

    h5 {
      margin-top: 40px
    }

    #year {
      padding-top: 100px;
      @include flex;
      flex-direction: column;
      text-align: center;
      .ds-box {
        display: flex;
        width: 80%;
      }
      
      .ds-box.ds-top {
        
        .ds-box-text {
          margin-left: 260px;
        }
      }

      .ds-box.ds-bottom {
        
        .ds-box-text {
          margin-right: 280px;
        }
      }
    }

   #event {
    padding-top: 60px;
    padding-bottom: 100px;
    text-align: center;
     .row {
        margin-bottom: 120px;
        margin-top: 60px;
        .ds-card {
         position: relative;
         padding: 40px 30px;
         color: $text-13;
         background-color: $background-1;
         border-radius: 15px;
   
          span,
          p,
          i {
            color: $text-9;
          }
        
          button {
          
            i {
              color: $text-1;
            }
          }
        }
      }
    }
  }
</style>