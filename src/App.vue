<template>
  <main class="main-layout full">
      <app-header/>
      <app-hero/>
      <two-part-responsive/>
      <testimony-grid/>
  </main>
</template>

<script>
import appHeader from './components/app-header.vue';
import twoPartResponsive from './components/two-part-responsive.vue';
import testimonyGrid from './components/testimony-grid.vue';
import AppHero from './components/app-hero.vue';
  export default {
    
    components: {
      appHeader,
      twoPartResponsive,
      testimonyGrid,
      AppHero,
    }
  }
</script>

<style lang="scss" scoped>

</style>