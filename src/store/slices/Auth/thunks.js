import { checkingCredentials } from "./authSlice"

export const checkinAuthentication=(name,password)=>{
    return async(dispatch)=>{

        dispatch(checkingCredentials());

    }
}
