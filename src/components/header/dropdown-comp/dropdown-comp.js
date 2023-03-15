import {navigateTo} from "../../../Js/routings/routeManager.js";
import {isAuthenticated} from "../../../Js/auth/authentication.js";

export default {
  name: 'dropdown-comp',
  components: {},
  props: [],
  watch: {
    $route(to,from){
      navigateTo(to)
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    isAuthorized(){
      return isAuthenticated()
    }
  }
}


