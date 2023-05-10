<script>
  import {store} from '../../store';
  export default {
    name: 'Partners',

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
      <div id="partners">
        <h2>{{ store.partners.h2 }}</h2>
        <p>{{ store.partners.p }}</p>
        <div class="row">
          <div
            class="col"
            v-for="(logo, i) of store.partners.logos"
            :key="i"
          >
            <img :src="getImage(logo)" class="ds-icon" alt="logo">
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
    padding: 100px;
    color: $text-13;

    #partners {
      text-align: center;

      .row {
        
        .col {
          @include flex;
          padding: 20px;

          img {
            filter: invert(75%);
          }
        }
      }
    }
  }
</style>