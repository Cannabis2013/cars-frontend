<template></template>
<script>
import * as Navigator from '../../Js/routings/routeManager'
export default {
  
  name: 'root-comp',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {
    
  },
  mounted () {
    Navigator.navigateTo("/home")
  },
  methods: {

  }
}
</script>
