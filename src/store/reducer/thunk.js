
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { dealerApi } from "@/api/api";
import { getCourse , getUserRegister} from "./getCursosId";

//llamado de las api         
    export const Filter = createAsyncThunk(
      'filter/Filter',
     async (arr) => {
        const response = await axios.post("https://dealer-code.fly.dev/filter",{categories:arr});
          console.log(response.data)
        return response.data;
      }
    );
    export const getCategories = createAsyncThunk(
     'categorias/getCategories',
     async () => {
        const response = await axios.get("https://dealer-code.fly.dev/category");
        return response.data;
      }
    );


//Conectamos el registro al api 
export const getRegisterUser = (user) =>{
    return async (dispatch , getState) =>{
        const userRegister = await axios.post(`https://dealer-code.fly.dev/user/signup`, user)
        dispatch(getUserRegister(userRegister.data))
    }
}

export const getUserSignIn = user =>{
  return async (dispatch , getState) =>{
    const userLogin = await axios.post('https://dealer-code.fly.dev/user/singin' , user)
    console.log(userLogin)
  }
}

export const getCursoId = (id) =>{
  return async (dispatch , getState) =>{
    
      const {data} = await axios.get(`https://dealer-code.fly.dev/course/${id}`)
      dispatch(getCourse(data))
  }
}
