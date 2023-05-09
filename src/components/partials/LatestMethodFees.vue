<script>
  export default {
    name: 'LatestMethodFees'
  }
</script>








<template>
  <section>
    <div class="container">
      <div id="latest">
        <h2>title</h2>
        <div class="row">
          <div class="col">
            <div class="ds-card">
              <img src="" alt="img">
              <h3>title</h3>
              <span>teacher</span>
              <span>price</span>
              <button>BUTTON</button>
            </div>
          </div>
          <div class="col">
            <div class="ds-card">
              <img src="" alt="img">
              <h3>title</h3>
              <span>teacher</span>
              <span>price</span>
              <button>BUTTON</button>
            </div>
          </div>
          <div class="col">
            <div class="ds-card">
              <img src="" alt="img">
              <h3>title</h3>
              <span>teacher</span>
              <span>price</span>
              <button>BUTTON</button>
            </div>
          </div>
          <div class="col">
            <div class="ds-card">
              <img src="" alt="img">
              <h3>title</h3>
              <span>teacher</span>
              <span>price</span>
              <button>BUTTON</button>
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

  section {
    border: 1px solid black;

    #latest {
      border: 1px solid black;
    }

    #method,
    #fees {
      display: flex;
      border: 1px solid black;
    }
  }
</style>