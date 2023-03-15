import * as g from "./userDetailsManager"
import router from '../../main'
import {clearUserDetails, saveUserDetails} from "./userDetailsManager";
import {nonAuthenticatedPostRequest} from "../Http/HttpClient.js";
export function authenticate(){
    let token = g.lsAccessToken()
    if(token !== "")
        router.push("/home")
    else
        router.push("/auth/login")
}

const url = "http://localhost:8080/api/auth/login"

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