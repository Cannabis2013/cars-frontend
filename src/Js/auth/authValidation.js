
export function validateUserName(username){
    return RegExp("^[A-z0-9]+$").test(username)
}