import * as storage from "./userDetailsManager"
import router from '../../routing'
import {nonAuthenticatedPostRequest} from "../Http/HttpClient.js";
import {HttpStatusCode} from "axios";

export const loginPath = "/auth/login"
const azureUrl = "https://cars-r-us-api.azurewebsites.net/api/auth/login"
const localUrl = "http://localhost:8080/api/auth/login"

export function isAuthenticated(){
    return storage.lsAccessToken() !== ""
}

export function logout(){
    storage.clearUserDetails()
    router.push('/auth/login')
}

export function login(credentials,errorHandler) {
    let json = JSON.stringify(credentials)
    nonAuthenticatedPostRequest(localUrl, json, authenticationSuccess,
        (e) => errorHandler("Incorrect username or password"),
        (e) => handleConnectionRefused(e,errorHandler))
}

function handleConnectionRefused(e,errorHandler){
    if(e.code === "ERR_NETWORK"){
        errorHandler("No active connection")
        return
    }
    let code = e.response.status
    if(code === HttpStatusCode.Unauthorized)
        errorHandler(e.response.data)
}

function authenticationSuccess(userDetails){
    console.log(userDetails)
    storage.saveUserDetails(userDetails)
    router.push('/')
}