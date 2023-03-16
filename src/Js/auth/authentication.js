import * as g from "./userDetailsManager"
import router from '../../routing'
import {clearUserDetails, saveUserDetails} from "./userDetailsManager";
import {nonAuthenticatedPostRequest} from "../Http/HttpClient.js";

export const loginPath = "/auth/login"

export function isAuthenticated(){
    return g.lsAccessToken() !== ""
}

const url = "http://localhost:8080/api/auth/login"

export function logout(){
    clearUserDetails()
    router.push('/auth/login')
}

export function login(credentials,errorHandler){
    let json = JSON.stringify(credentials)
    nonAuthenticatedPostRequest(url,json,authenticationSuccess,
        (e) => errorHandler("Incorrect username or password"),
        (e) => errorHandler("No active connection"))
}

function authenticationSuccess(userDetails){
    console.log(userDetails)
    saveUserDetails(userDetails)
    router.push('/')
}