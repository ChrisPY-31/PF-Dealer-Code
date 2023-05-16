import { createSlice } from "@reduxjs/toolkit";
import { Filter } from "../thunk";
export let initialState = {
    filter:[],
}
export const filterSlice= createSlice({
    name:"filter",
    initialState,
    reducers:{
      Order:(state,action)=>{
        if(action.payload==="MayorPrecio"){ 
            console.log("hola")
            const coursesA=[...state.filter]
            let orden= coursesA.sort((a,b)=>{
             
              if (a.price > b.price) {
                return -1;
              }
              if (a.price <= b.price) {
                return 1;
              }
              return 0;
            }
            )
            state.filter=orden
        }
        if(action.payload==="MenorPrecio"){
            const coursesA=[...state.filter]
            const orden= coursesA.sort((a,b)=>{
                if (a.price < b.price) {
                  return -1;
                }
                if (a.price >= b.price ) {
                  return 1;
                }
                return 0;
              }
              )
              state.filter=orden
        }
        if(action.payload==="Gratis"){
            const coursesA=[...state.filter]
            const orden= coursesA.filter(f=>f.price===0)
            if(orden.length){
              state.filter=orden
          }else{
            window.alert("No hay")
          }
        }
    },
    },
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
    export const {Order} = filterSlice.actions;