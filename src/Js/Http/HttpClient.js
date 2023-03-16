import axios, {HttpStatusCode} from "axios";
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
        if(response.status !== HttpStatusCode.Ok)
            badRequestHandler(response.status)
        else
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

function authHeader(){
    return {
        username : userCredentials.lsUserName(),
        authorization : 'Bearer ' + userCredentials.lsAccessToken(),
        roles : userCredentials.lsRoles()
    }
}

