const isDev = false
const base = isDev ? 'http://localhost:8080'  : 
                    'https://cars-r-us-api.azurewebsites.net'

const endpoints = {
    car : base + "/cars/one",
    cars : base + "/cars/all",
    login : base + "/api/auth/login",
    addReservation : base + "/reservations/reserve",
    allReservations : base + "/reservations/all",
    memberReservations : base + "/reservations/memberReservations"
}

const apiInfo = {
    endpoints
}

export default apiInfo