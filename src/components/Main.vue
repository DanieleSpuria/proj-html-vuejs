<script>
  import CourserFaculties from './partials/CourserFaculties.vue';
  import YearEvent from './partials/YearEvent.vue';
  import LatestMethodFees from './partials/LatestMethodFees.vue';
  import Sub from './partials/Sub.vue';
  import Partners from './partials/Partners.vue';
  export default {
    name: 'Main',
    
    components: {
      CourserFaculties,
      YearEvent,
      LatestMethodFees,
      Sub,
      Partners
    }
  }
</script>








<template>
  <main>
    <CourserFaculties/>
    <YearEvent/>
    <LatestMethodFees/>
    <Sub/>
    <Partners/>
  </main>
</template>








<style lang="scss" scoped>

</style>