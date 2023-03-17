import axios, {HttpStatusCode} from "axios";
import * as userCredentials from "../auth/userDetailsManager";

export function NonAuthenticatedHttpPostRequest(url, payload, resultHandler, badRequestHandler, badConnectionHandler){
    axios({
        method : 'post',
        url : url,
        headers : {
            "content-type" : "application/json"
        },
        data : payload
    }).then(response => {
        if(response.status !== HttpStatusCode.Ok)
            badRequest(response.status,badRequestHandler)
        else
            resultHandler(response.data);
    }).catch(e => connectionRefused(e,badConnectionHandler))
}

export function httpPostRequest(url, payload, resultHandler, badRequestHandler, badConnectionHandler){
    axios({
        method : 'post',
        url : url,
        headers : headerWithAuthentication(),
        data : payload
    }).then(response => {
        if(response.status === HttpStatusCode.BadRequest)
            badRequest(response.status,badRequestHandler)
        else
            resultHandler(response.data);
    }).catch(e => connectionRefused(e,badConnectionHandler))
}

export function httpGetRequest(url, resultHandler, requestParameters = {}) {
    axios({
        method : 'get',
        url : url,
        params: requestParameters,
        headers : headerWithAuthentication()
    }).then(response => {
        if(response.status !== 200)
            return
        resultHandler(response.data);
    }).catch(e => console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message))
}

function headerWithAuthentication(){
    return {
        "content-type" : "application/json",
        username : userCredentials.getUserName(),
        authorization : 'Bearer ' + userCredentials.getAccessToken(),
        roles : userCredentials.getUserRoles()
    }
}

function badRequest(status,handler){
    if(handler !== undefined)
        handler(status)
    else
        console.log("Server responded with code: " + status)
}

function connectionRefused(e, handler){
    if(handler !== undefined)
        handler(e)
    else
        console.log("Connection refused: " + e)
}

