<script>
  export default {
    name: 'YearMethod'
  }
</script>








<template>
  <section>
    <div class="container">
      <div id="year">
        <h2>year</h2>
        <div class="ds-box">
          <div class="ds-box-text">
            <span>title</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.
            </p>
          </div>
          <div class="ds-box-text">
            <span>title</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.
            </p>
          </div>
        </div>
        <img src="" alt="img">
        <div class="ds-box">
          <div class="ds-box-text">
            <span>title</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.
            </p>
          </div>
          <div class="ds-box-text">
            <span>title</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.
            </p>
          </div>
        </div>
      </div>
      
      <div id="event">
        <h2>event</h2>
        <div class="row">
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

  section {
    border: 1px solid black;

    #year {
        @include flex;
        flex-direction: column;
        text-align: center;
        border: 1px solid black;


        .ds-box {
          display: flex;
        }

      }

   #event {
     text-align: center;
     border: 1px solid black;
   }
  }
</style>