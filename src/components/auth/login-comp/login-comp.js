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
      this.showSpinnerCircle()
      login({
        username : this.uName,
        password : this.pass
      },this.handleError)
      this.clearValues()
    },
    clearValues(){
      this.uName = ""
      this.pass = ""
    },
    handleError(msg){
      this.message = msg
      this.hideSpinnerCircle()
    },
    showSpinnerCircle(){
      timer = setTimeout(() => {
        this.showSpinner = true
      },500)
    },
    hideSpinnerCircle(){
      clearTimeout(timer)
      this.showSpinner = false
    }
  }
}


