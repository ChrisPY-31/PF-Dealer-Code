//llamado de las api 

import { dealerApi } from "@/api/api"

//Conectamos el registro al api 
export const getRegisterUser = (user) =>{
    return async (dispatch , getState) =>{
        console.log(user)
        // const userRegister = await axios.Post(`${dealerApi}/user/signup`, user)
        // console.log(userRegister)
    }

}