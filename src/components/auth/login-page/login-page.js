import {login} from "../../../Js/auth/authentication";

export default {
  name: 'login-page',
  components: {},
  props: [],
  data () {
    return {
      uName : "",
      pass : "",
      message : "TEST"
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
      login(credentials,this.authRejected)
      this.clearValues()
    },
    authRejected(){
      
    },
    clearValues(){
      this.uName = "MHAdmin"
      this.pass = "xrpofni"
    },
  }
}


