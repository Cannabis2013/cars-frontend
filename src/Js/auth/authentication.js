import * as g from "./userDetailsManager"
import router from '../../routing'
import {clearUserDetails, saveUserDetails} from "./userDetailsManager";
import {nonAuthenticatedPostRequest} from "../Http/HttpClient.js";

export const loginPath = "/auth/login"

export function isAuthenticated(){
    return g.lsAccessToken() !== ""
}

const url = "https://cars-r-us-api.azurewebsites.net/api/auth/login"

export function logout(){
    clearUserDetails()
    router.push('/auth/login')
}

export function login(credentials){
    let json = JSON.stringify(credentials)
    nonAuthenticatedPostRequest(url,json,authenticationSuccess,authenticationRejected)
}

function authenticationSuccess(userDetails){
    console.log(userDetails)
    saveUserDetails(userDetails)
    router.push('/')
}

function authenticationRejected(data){
    alert("WRONG CREDENTIALS!")
}