import {httpGetRequest} from "../../../Js/Http/HttpClient.js";
import apiInfo from "../../../Js/api/apiEndpoints.js";
import {getUserName} from "../../../Js/auth/userDetailsManager.js";

export default {
  name: 'reservations-overview',
  components: {},
  props: [],
  data () {
    return {
      reservations : []
    }
  },
  computed: {
  },
  mounted () {
    httpGetRequest(apiInfo.endpoints.memberReservations,this.handleReservations,{
      memberName : getUserName()
    })
  },
  methods: {
    handleReservations : function(data) {
      this.reservations = data
    }
  }
}


