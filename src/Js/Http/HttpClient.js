import axios from "axios";
import {jwtAccessToken} from "../Jwt/jwtSecurityTokens.js";

export function httpGetRequest(url, resultHandler, requestParameters = {}) {
    axios({
        method : 'get',
        url : url,
        headers : {"Bearer" : ""},
        params : requestParameters
    }).then(response => {
        if(response.status !== 200){
            console.log("Bad response code: " + response.status)
            resultHandler("[]");
        }
        resultHandler(response.data);
    }).catch(e => console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message))
}

export function httpPostRequest(url, resultHandler, payload, requestParameters = {}){
    let token = jwtAccessToken();
    axios({
        method : 'post',
        url : url,
        headers : {
            "content-type" : "application/json",
            "Bearer" : ""
        },
        data : payload,
        params : requestParameters
    }).then(response => {
        if(response.status !== 200){
            console.log("Bad response code: " + response.status)
            resultHandler("[]");
        }
        resultHandler(response.status);
    }).catch(e => console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message))
}

