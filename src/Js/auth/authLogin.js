import {nonAuthorizedPostRequest} from "../Http/HttpClient.js";
import router from '/src/main'
import {saveUserDetails} from "./userDetailsManager";

const url = "http://localhost:8080/api/auth/login"

export function login(credentials){
    let json = JSON.stringify(credentials)
    nonAuthorizedPostRequest(url,json,authenticationSuccess,authenticationRejected)
}

function authenticationSuccess(userDetails){
    console.log(userDetails)
    saveUserDetails(userDetails)
    router.push('/')
}

function authenticationRejected(data){
    alert("WRONG CREDENTIALS!")
}