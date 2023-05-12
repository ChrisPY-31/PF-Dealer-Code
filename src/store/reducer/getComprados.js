import { createSlice} from "@reduxjs/toolkit"
import {   getComprados  } from "./addPagos/agregarPago"
const initialState = {
    comprados: null
}

export const getCompradosSlice = createSlice({
    name: "comprados",
    initialState,
     reducers: {
        addPPago: () => {
           
        }
     },
    
     extraReducers:  (builder) => {
        builder.addCase(getComprados.fulfilled, (state, action) => {
           state.comprados = action.payload
           console.log(action.payload);
        })
     },
    
})