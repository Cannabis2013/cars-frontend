import {httpGetRequest} from '../../../Js/Http/HttpClient'

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
    httpGetRequest("https://cars-r-us-api.azurewebsites.net/cars/one",this.handleResult,{id : this.id})
  },
  methods: {
    handleResult : function (data){
      this.car = data
    },
  }
}


