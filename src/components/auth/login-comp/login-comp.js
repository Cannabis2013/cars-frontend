import {login} from "../../../Js/auth/authentication";

let timer

export default {
  name: 'login-page',
  components: {},
  props: [],
  data () {
    return {
      username : "",
      password : "",
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
      login(this.username,this.password,this.handleError)
      this.clearValues()
    },
    clearValues(){
      this.username = ""
      this.password = ""
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


