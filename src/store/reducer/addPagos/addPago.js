import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { agregarPago } from "./agregarPago"
const initialState = {
    pagos: []
}

export const pasarela = createSlice({
    name: "pagos",
    initialState,
     reducers: {
        addPPago: () => {
           
        }
     },
     extraReducers:  (builder) => {
        builder.addCase(agregarPago.fulfilled, (state, action) => {
           state.pagos.push(action.payload)
        })
     }
})

