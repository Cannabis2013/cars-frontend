<template>
    <header-bar></header-bar>
    <div id="view-container">
      <router-view></router-view>
    </div>
</template>
<script>
import HeaderBar from './header-bar/header-bar-index.vue'
export default {
  name: 'main-layout',
  components: {
    HeaderBar
  }
}
</script>
<style scoped>
  #view-container{
    margin-top: 25px;
    width: 100%;
  }
</style>