import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { cursosPagos } from "./agregarPago"
const initialState = {
    cursopagos: []
}

export const cursosPagados = createSlice({
    name: "pagos",
    initialState,
     reducers: {
        setPPago: () => {
           
        }
     },
     extraReducers:  (builder) => {
        builder.addCase(cursosPagos.fulfilled, (state, action) => {
           state.cursopagos.push(action.payload)
        })
     }
})