import * as g from "../auth/userDetailsManager"
import router from '../../main'
export function authenticate(){
    let token = g.lsAccessToken()
    if(token !== "")
        router.push("/home")
    else
        router.push("/auth/login")
}