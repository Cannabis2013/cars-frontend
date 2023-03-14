import Car from '../car-card/car-card.vue'
import {httpGetRequest} from '../../../Js/Http/HttpClient'


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
    httpGetRequest("https://cars-r-us-api.azurewebsites.net/cars/all",this.handleResult)
  },
  methods: {
    handleResult : function (cars){
      this.cars = cars;
    }
  }
}


