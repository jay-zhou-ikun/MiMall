<template>
  <div id="app">
    <nav-header />
    <router-view/>
    <nav-footer />
  </div>
</template>
<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/reset.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/button.scss';
</style>
