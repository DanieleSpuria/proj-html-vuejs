<script>
  export default {
    name: 'ButtonBottom',
    
    methods: {
      scroll() {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<template>
  <div class="ds-button-bottom">
    <div class="ds-left">
      <button class="ds-btn-btm">
        <img src="../../assets/svg/svg-3.svg" alt="svg">
        <span>Purchase Theme</span>
      </button>

      <button class="ds-btn-btm">
        <img src="../../assets/svg/svg-2.svg" alt="svg">
        <span>Related Theme</span>
      </button>
    </div>

    <div class="ds-right">
      <div
        class="ds-up ds-circle"
        @click="scroll()"
      >
        <img src="../../assets/svg/back-to-top-arrow.svg" alt="top">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../scss/partials/var' as *;
  @use '../../scss/partials/mixin' as *;

  .ds-button-bottom {
    @include flex('vertical');
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 30px 40px;

    .ds-left {
      display: flex;
      flex-direction: column;

      .ds-btn-btm {
        width: 180px;
        margin: 8px 0;
        padding: 10px;
        color: #e8e8e8;
        background-color: $background-8;
        border-radius: 5px;
        border: none;
        box-shadow: 0 8px 6px rgba(0, 0, 0, 0.326);
        font-size: 11px;
        transition: all .5s;

        &:first-of-type:hover {
          background-color: #e99c58;
          transform: translateY(-8px);
        }

        &:first-of-type:hover img {
          filter: invert(100) grayscale(100);
        }

        &:nth-of-type(2):hover {
          background-color: #e97c58;
          transform: translateY(-8px);
        }

        img {
          display: inline-block;
          width: 14px;
          margin-right: 8px;
        }
      }
    }

    .ds-right {

      .ds-up {
        width: 40px;
        margin: 0;
        color: $text-1;
        
        img {
          width: 18px;
        }
      }
    }
  }
</style>