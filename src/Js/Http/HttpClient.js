import axios from "axios";

export function getRequest(url,resultHandler,requestParameters = {}) {
    axios({
        method : 'get',
        url : url,
        params : requestParameters
    }).then(response => {
        if(response.status !== 200){
            console.log("Bad response code: " + response.status)
            resultHandler("[]");
        }
        resultHandler(response.data);
    }).catch(e => console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message))
}

export function getRequestWithParams(url,reqParams,resultHandler) {
    axios({
        method : 'get',
        url : url,
        params: reqParams
    }).then(response => {
        if(response.status !== 200){
            console.log("Bad response code: " + response.status)
            resultHandler("[]");
        }
        resultHandler(response.data);
    }).catch(e => console.log('HTTPCLIENT FAIL MESSAGE: ' + e.message))
}