<template>
    <div id="page-cont">
      <header-bar></header-bar>
      <div id="view-container">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
import HeaderBar from './components/header/header-bar/header-bar.vue'
export default {
  name: 'main-layout',
  components: {
    HeaderBar
  }
}
</script>
<style scoped>
  #page-cont{
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows : min-content 1fr;
    grid-auto-flow: column;
  }
  #view-container{
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-left: auto;
    margin-right: auto;
    border:5px solid red;
  }
  
  #view-container::-webkit-scrollbar{
    display: none;
  }
</style>