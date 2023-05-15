import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import {  PostCursoscart  } from "./addPagos/agregarPago"
const initialState = {
    CursosCheckaut: [],
    
   
}

export const postCursosSliceCart = createSlice({
    name: "curso",
    initialState,
     reducers: {
        addPPago: () => {
           
        }
     },
     extraReducers:  (builder) => {
        builder.addCase(PostCursoscart.fulfilled, (state, action) => {
           state.CursosCheckaut.push(action.payload)
           console.log(action.payload);
        })
     },
    
   
})
