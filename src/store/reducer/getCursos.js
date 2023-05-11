import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import {  PostCursoscart,  getCursos } from "./addPagos/agregarPago"
const initialState = {
    CursosCart: [],
    cursos: [],
   
}

export const getCursosSlice = createSlice({
    name: "curso",
    initialState,
     reducers: {
        addPPago: () => {
           
        }
     },
     extraReducers:  (builder) => {
        builder.addCase(PostCursoscart.fulfilled, (state, action) => {
           state.CursosCart.push(action.payload)
           console.log(action.payload);
        })
     },
    
     extraReducers:  (builder) => {
        builder.addCase(getCursos.fulfilled, (state, action) => {
         state.cursos = action.payload
         console.log(action.payload);
        })
     }
})
