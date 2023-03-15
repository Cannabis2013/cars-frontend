import {login} from "../../../Js/auth/authLogin.js";

export default {
  name: 'login-page',
  components: {},
  props: [],
  data () {
    return {
      uName : "MHAdmin",
      pass : "xrpuofni"
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
      this.uName = "MHAdmin"
      this.pass = "xrpofni"
    },
  }
}


