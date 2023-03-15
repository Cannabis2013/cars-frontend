import Car from '../car-card/car-card.vue'
import {authenticatedGetRequest} from '../../../Js/Http/HttpClient'

const azureGetCars = "https://cars-r-us-api.azurewebsites.net/cars/all"
const localGetCarsUri = "http://localhost:8080/cars/all"

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
    authenticatedGetRequest(localGetCarsUri,this.handleResult)
  },
  methods: {
    handleResult : function (cars){
      this.cars = cars;
    }
  }
}


