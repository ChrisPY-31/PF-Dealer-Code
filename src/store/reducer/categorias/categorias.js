import { createSlice } from "@reduxjs/toolkit";
import { getCategories} from "../thunk";
 let initialState = {
    categorias:[],
    status: 'idle',
    error: null
}
export const categoriasSlice= createSlice({
name:"categorias",
initialState,
  extraReducers:(builder)=>{
    console.log("entro")
     builder
     .addCase(Filter.fulfilled, (state, action)=>{
        state.categorias = action.payload;
        console.log(action.payload)
      })
    },
    extraReducers:(builder)=>{
      console.log("entro2")
        builder
        .addCase(getCategories.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.categorias= action.payload;
          })
          .addCase(getCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
        }
})
export default categoriasSlice.reducer;