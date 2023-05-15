//llamado de las api 
import { dealerApi } from "@/api/api"
import axios from "axios"
//Conectamos el registro al api 
export const getRegisterUser = (user) =>{
    return async (dispatch , getState) =>{
        console.log(user)
        const userRegister = await axios.post(`${dealerApi}/user/signup`, user)
        console.log(userRegister)
    }

}