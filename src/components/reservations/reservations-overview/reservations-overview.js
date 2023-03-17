import {httpGetRequest} from "../../../Js/Http/HttpClient.js";
import apiInfo from "../../../Js/api/apiEndpoints.js";

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
    httpGetRequest(apiInfo.endpoints.apiAllResUri, this.handleReservations)
  },
  methods: {
    handleReservations : function(data) {
      this.reservations = data
    }
  }
}


