export function getAccessToken(){
    let token = localStorage.getItem("tokenKey")
    if(token == null)
        return ""
    return token
}

export function getUserName(){
    let username = localStorage.getItem("username")
    if(username == null)
        return ""
    return username
}

export function getUserRoles(){
    let roles = localStorage.getItem("roles")
    if(roles == null)
        return ""
    return roles
}

export function saveUserDetails(userDetails){
    localStorage.setItem("username",userDetails.username)
    localStorage.setItem("roles",userDetails.roles)
    localStorage.setItem("tokenKey",userDetails.token)
}

export function clearUserDetails(){
    localStorage.clear()
}


