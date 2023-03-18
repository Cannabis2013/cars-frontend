import {httpGetRequest} from '../../../Js/Http/HttpClient'
import apiInfo from "../../../Js/api/apiEndpoints.js";
import router from "../../../routing.js";

export default {
  name: 'car-details',
  components: {},
  props: {
    id : String
  },
  data () {
    return {
      car : JSON,
      image : String
    }
  },
  computed: {
    
  },
  mounted () {
    httpGetRequest(apiInfo.endpoints.car,this.handleResult,{id : this.id})
  },
  methods: {
    handleResult : function(data) {
      this.car = data
    },
    handleAddReservationClicked : function (){
      let uri = "/reservations/add/" + this.car.id + "/" 
          + this.car.brand + "/" + this.car.model
      router.push(uri)
    }
  }
}


