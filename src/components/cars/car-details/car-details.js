import {authenticatedGetRequest} from '../../../Js/Http/HttpClient'
import apiInfo from "../../../Js/api/apiEndpoints.js";

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
    authenticatedGetRequest(apiInfo.endpoints.apiCarUri,this.handleResult,{id : this.id})
  },
  methods: {
    handleResult : function (data){
      this.car = data
    },
  }
}


