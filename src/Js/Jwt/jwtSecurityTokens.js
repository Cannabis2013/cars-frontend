const tokenKey = "aToken"

export function jwtAccessToken(){
    let token = localStorage.getItem(tokenKey)
    if(token == null)
        return ""
    return token
}

export function setJwtAccessToken(token){
    localStorage.setItem(tokenKey,token)
}



