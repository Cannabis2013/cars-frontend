import {getUserName} from "../../../Js/auth/userDetailsManager.js";
import {httpPostRequest} from "../../../Js/Http/HttpClient.js";
import apiInfo from "../../../Js/api/apiEndpoints.js";
import router from "../../../routing.js";

export default {
  name: 'add-reservation-comp',
  components: {},
  props: {
    carId : String,
    carBrand : String,
    carModel : String
  },
  data () {
    return {
      start : "",
      end : ""
    }
  },
  computed: {
    
  },
  mounted () {
  },
  methods: {
    sendAddRequest : function (){
      let payload = {
        memberName : getUserName(),
        reservationStart : this.start,
        reservationEnd : this.end,
        carId : this.carId
      }
      httpPostRequest(apiInfo.endpoints.addReservation, payload,this.handleSuccess)
    },
    handleSuccess : function (){
      router.push("/cars/all")
      alert("Congratulations, you have reserved a car")
    }
  }
}


