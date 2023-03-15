import {login} from "../../../Js/auth/authentication";

export default {
  name: 'login-page',
  components: {},
  props: [],
  data () {
    return {
      uName : "",
      pass : ""
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    handleSubmit(){
      let credentials = {
        username : this.uName,
        password : this.pass
      }
      login(credentials)
      this.clearValues()
    },
    handleResult(data){
      
    },
    clearValues(){
      this.uName = ""
      this.pass = ""
    },
  }
}


