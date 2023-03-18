const isDev = false
const base = isDev ? 'http://localhost:8080'  : 
                    'https://cars-r-us-api.azurewebsites.net'

const endpoints = {
    apiCarUri : base + "/cars/one",
    apiCarsUri : base + "/cars/all",
    apiLoginUri : base + "/api/auth/login",
    apiAddResUri : base + "/reservations/reserve",
    apiAllResUri : base + "/reservations/all"
}

const apiInfo = {
    endpoints
}

export default apiInfo