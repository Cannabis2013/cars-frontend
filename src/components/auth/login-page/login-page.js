import {login} from "../../../Js/auth/authentication";

let timer

export default {
  name: 'login-page',
  components: {},
  props: [],
  data () {
    return {
      uName : "",
      pass : "",
      message : "",
      showSpinner : false
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
      login(credentials,this.handleError)
      timer = setTimeout(() => {
        this.showSpinner = true
      },500)
      
      this.clearValues()
    },
    clearValues(){
      this.uName = "MHAdmin"
      this.pass = "xrpofni"
    },
    handleError(msg){
      this.message = msg
      clearTimeout(timer)
    }
  }
}


