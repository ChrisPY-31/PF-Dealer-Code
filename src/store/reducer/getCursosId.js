import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import {   getCursosId  } from "./addPagos/agregarPago"
const initialState = {
    Detail: null
}

export const getCursosIdSlice = createSlice({
    name: "curso",
    initialState,
     reducers: {
        addPPago: () => {
           
        }
     },
    
     extraReducers:  (builder) => {
        builder.addCase(getCursosId.fulfilled, (state, action) => {
           state.Detail = action.payload
           console.log(action.payload);
        })
     },
    
})