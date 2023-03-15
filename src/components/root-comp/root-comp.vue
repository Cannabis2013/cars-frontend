<template></template>
<script>
import {authenticate} from "../../Js/auth/authentication.js";
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
    authenticate()
  },
  methods: {

  }
}
</script>
