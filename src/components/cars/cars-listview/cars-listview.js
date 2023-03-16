import Car from '../car-card/car-card.vue'
import {authenticatedGetRequest} from '../../../Js/Http/HttpClient'
import apiInfo from "../../../Js/api/apiEndpoints.js";


export default {
  name: 'cars-overview',
  components: {Car},
  props: [],
  data () {
    return{
      cars : []
    }
  },
  computed: {
    
  },
  mounted () {
    authenticatedGetRequest(apiInfo.endpoints.apiCarsUri,this.handleResult)
  },
  methods: {
    handleResult : function (cars){
      this.cars = cars;
    }
  }
}


