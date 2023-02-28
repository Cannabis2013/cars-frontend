
export default {
  name: 'car-card',
  components: {},
  props: {
    car : JSON,
  },
  data () {
    return {
    }
  },
  computed: {
    
  },
  mounted () {

  },
  methods: {
    redirectToDetails : function (){
      this.$root.$router.push('/cars/details/' + this.car.id)
    }
  }
}


