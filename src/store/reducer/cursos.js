import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import {  crearCurso } from "./addPagos/agregarPago"
const initialState = {
    crearCurso: []
}

export const cursosSlice = createSlice({
    name: "curso",
    initialState,
     reducers: {
        addPPago: () => {
           
        }
     },
     extraReducers:  (builder) => {
        builder.addCase(crearCurso.fulfilled, (state, action) => {
           state.crearCurso.push(action.payload)
        })
     }
})
