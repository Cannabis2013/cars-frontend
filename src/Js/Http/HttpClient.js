import axios from "axios";
import * as userCredentials from "../auth/userDetailsManager";

export function nonAuthenticatedPostRequest(url, payload, resultHandler, badRequestHandler, badConnectionHandler){
    axios({
        method : 'post',
        url : url,
        headers : {
            "content-type" : "application/json"
        },
        data : payload
    }).then(response => {
        if(response.status !== 200){
            badRequestHandler(response.status);
        }
        resultHandler(response.data);
    }).catch(e => badConnectionHandler(e))
}

export function authenticatedGetRequest(url, resultHandler,requestParameters = {}) {
    let header = authHeader()
    axios({
        method : 'get',
        url : url,
        params: requestParameters,
        headers : header
    }).then(response => {
        if(response.status !== 200)
            return
        resultHandler(response.data);
    }).catch(e => console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message))
}

function handleConnectionProblem(e, handler){
    if(handler === undefined)
        console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message)
    else
        handler(e)
}

function authHeader(){
    return {
        username : userCredentials.lsUserName(),
        authorization : 'Bearer ' + userCredentials.lsAccessToken(),
        roles : userCredentials.lsRoles()
    }
}

