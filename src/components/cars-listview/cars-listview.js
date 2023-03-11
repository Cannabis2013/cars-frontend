import Car from '../car-card/car-card.vue'
import {getRequest} from '../../Js/Http/HttpClient'


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
    getRequest("https://cars-r-us-api.azurewebsites.net/cars/all",this.handleResult)
  },
  methods: {
    handleResult : function (cars){
      this.cars = cars;
    }
  }
}


