
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

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
        console.log(user)
        const userRegister = await axios.post(`${dealerApi}/user/signup`, user)
        console.log(userRegister)
    }
}