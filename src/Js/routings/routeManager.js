import router from '../../routing'
import * as Auth from '../auth/authentication'

export function navigateTo(path, authCheck = true){
    if(authCheck && !Auth.isAuthenticated())
        router.push(Auth.loginPath)
    else
        router.push(path)
}