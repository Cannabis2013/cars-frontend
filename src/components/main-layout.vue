<template>
    <header-bar></header-bar>
    <router-view></router-view>
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