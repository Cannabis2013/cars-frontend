import axios from "axios";
import {lsAccessToken} from "../auth/userDetailsManager";

export function httpGetRequest(url, resultHandler, requestParameters = {}) {
    axios({
        method : 'get',
        url : url,
        headers : {"Bearer" : lsAccessToken()},
        params : requestParameters
    }).then(response => {
        if(response.status !== 200){
            console.log("Bad response code: " + response.status)
            resultHandler("[]");
        }
        resultHandler(response.data);
    }).catch(e => console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message))
}

export function nonAuthorizedPostRequest(url,payload,resultHandler,errorHandler){
    axios({
        method : 'post',
        url : url,
        headers : {
            "content-type" : "application/json",
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Headers" : "*"
        },
        data : payload
    }).then(response => {
        if(response.status !== 200){
            errorHandler(response.status);
        }
        resultHandler(response.data);
    }).catch(e => console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message))
}

