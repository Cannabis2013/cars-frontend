import {getRequest} from '../../Js/Http/HttpClient'

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
    getRequest("http://localhost:8080/cars/one",this.handleResult,{id : this.id})
  },
  methods: {
    handleResult : function (data){
      this.car = data
    },
  }
}


