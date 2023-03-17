import Car from '../car-card/car-card.vue'
import {httpGetRequest} from '../../../Js/Http/HttpClient'
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
    httpGetRequest(apiInfo.endpoints.apiCarsUri,this.handleResult)
  },
  methods: {
    handleResult : function (cars){
      this.cars = cars;
    }
  }
}


