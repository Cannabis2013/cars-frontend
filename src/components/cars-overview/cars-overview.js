import axios from 'axios'
import Car from '../car-card/car-card.vue'


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
    this.requestCarsFromBackend();
  },
  methods: {
    requestCarsFromBackend : function(){
      axios({
        method : 'get',
        url : 'http://localhost:8080/cars/all'
      }).then(response => {
        console.log(response)
        if(response.status !== 200){
          console.log("Bad response code: " + response.status)
          return
        }
        this.cars = response.data;
      }).catch(e => console.log('FAIL MESSAGE: ' + e.message))
    }
  }
}


