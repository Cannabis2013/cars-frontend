import DropDown from "../dropdown-comp/dropdown-comp.vue"
import {logout} from "../../../Js/auth/authentication";
export default {
  name: 'header-bar',
  components: {
    DropDown
  },
  props: [],
  data () {
    return {
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    handleLogout : function(){
      logout()
    }
  }
}


