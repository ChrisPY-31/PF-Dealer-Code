import { createSlice } from "@reduxjs/toolkit";
import { Filter } from "../thunk";
export let initialState = {
    filter:[],
}
export const filterSlice= createSlice({
    name:"filter",
    initialState,
      extraReducers:(builder)=>{
        console.log("entro")
         builder
         .addCase(Filter.fulfilled, (state, action)=>{
            state.filter = [...action.payload];
            console.log(action.payload)
          })
        },
    })
    export default filterSlice.reducer;
   