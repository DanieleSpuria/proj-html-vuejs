<script>
  export default {
    name: 'CourserFaculties'
  }
</script>








<template>
  <section>
    <div class="container">
      <div id="courses">
        <div class="ds-text">
          <h2>courses</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex non commodi, quasi enim id architecto animi iusto distinctio molestiae!
          </p>
          <button>BUTTON</button>
        </div>
        <img src="" alt="img">
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

  section {
    border: 1px solid black;

    #courses {
        @include flex('vertical');

        border: 1px solid black;
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
  }
</style>