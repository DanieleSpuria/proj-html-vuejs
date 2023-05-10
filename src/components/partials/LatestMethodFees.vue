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
      },
    }
  }
</script>








<template>
  <section>
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
                <a href="#">
                  <i class="fa-solid fa-eye"></i>
                  View Courses
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div id="method">
        <div class="ds-text">
          <img src="" alt="img">
          <h2>method</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero facilis aperiam labore doloribus maxime eligendi deserunt voluptatibus a modi.
          </p>
          <button>BUTTON</button>
        </div>
        
        <img src="" alt="img">
      </div>

      <div id="fees">
        <img src="" alt="img">
        <div class="ds-text">
          <img src="" alt="img">
          <h2>fees</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero facilis aperiam labore doloribus maxime eligendi deserunt voluptatibus a modi.
          </p>
          <button>BUTTON</button>
        </div>
      </div>
    </div>
  </section>
</template>








<style lang="scss" scoped>
  @use '../../scss/partials/mixin' as *;
  @use '../../scss/partials/var' as *;

  section {
    color: $text-13;

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

          a {
            text-decoration: none;
            color: $text-1;
          }
        }
      }
    }

    #method,
    #fees {
      display: flex;
      padding: 100px 0;
    }
  }
</style>