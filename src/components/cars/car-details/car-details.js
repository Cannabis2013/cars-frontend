import {authenticatedGetRequest} from '../../../Js/Http/HttpClient'

const azureGetCarUri = "https://cars-r-us-api.azurewebsites.net/cars/one"
const localGetCarUri = "http://localhost:8080/cars/one"

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
    authenticatedGetRequest(azureGetCarUri,this.handleResult,{id : this.id})
  },
  methods: {
    handleResult : function (data){
      this.car = data
    },
  }
}


