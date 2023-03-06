<template>
    <div id="page-cont">
      <header-bar></header-bar>
      <div id="view-container" :onscroll="(e) => this.printScrollMessage(e)">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
import HeaderBar from './header-bar/header-bar.vue'
export default {
  name: 'main-layout',
  components: {
    HeaderBar
  },
  methods: {
    printScrollMessage : function (e){
      let el = document.querySelector("#view-container")
      let y = el.scrollTop
      console.log(y)
    }
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
  }
  
  #view-container::-webkit-scrollbar{
    display: none;
  }
</style>