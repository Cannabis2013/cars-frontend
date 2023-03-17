import ReservationsView from '../reservations-overview/reservations-overview.vue'
import {getUserName} from "../../../Js/auth/userDetailsManager.js";


export default {
  name: 'reservations-page',
  components: {
    ReservationsView
  },
  props: [],
  data () {
    return {
      username : "user"
    }
  },
  computed: {
    
  },
  mounted () {
    this.username = getUserName()
  },
  methods: {
  }
}


