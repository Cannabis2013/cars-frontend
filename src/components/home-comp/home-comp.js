import {lsUserName} from "../../Js/auth/userDetailsManager";

export default {
  name: 'home-comp',
  components: {},
  props: [],
  data () {
    return {
      username : ""
    }
  },
  computed: {

  },
  mounted () {
    this.username = lsUserName()
  },
  methods: {

  }
}


