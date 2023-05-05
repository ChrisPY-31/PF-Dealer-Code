import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { agregarPago } from "./agregarPago"
const initialState = {
    datosDepago: []
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
            state.push(action.payload)
        })
     }
})

