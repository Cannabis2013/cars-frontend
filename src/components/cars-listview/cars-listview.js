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
    getRequest("http://localhost:8080/cars/all",this.handleResult)
  },
  methods: {
    handleResult : function (cars){
      this.cars = cars;
    }
  }
}


