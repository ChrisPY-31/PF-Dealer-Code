import {createSlice} from "@reduxjs/toolkit"
import {  PostCursoscart,  getCursos } from "./addPagos/agregarPago"
const initialState = {
    CursosCart: [],
    cursos: [],
    cursosOrigin:[],
    Favoritos:[]
    
}

export const getCursosSlice = createSlice({
    name: "curso",
    initialState,
     reducers: {  
      search_Courses:(state, action)=>{
         const course=[...state.cursosOrigin];
         const filter= course.filter(c=>c.title.toLowerCase().includes(action.payload.toLowerCase()));
         console.log(filter)
         if(!filter.length){
            window.alert("No se encontro resultados en la busqueda")
         }
         state.cursos=filter
     },
  Order2:(state,action)=>{
      if(action.payload==="MayorPrecio"){ 
          console.log("hola")
          const coursesA=[...state.cursosOrigin]
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
          state.cursos=orden
      }
      if(action.payload==="MenorPrecio"){
          const coursesA=[...state.cursosOrigin]
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
            state.cursos=orden
      }
      if(action.payload==="Gratis"){
          const coursesA=[...state.cursosOrigin]
          const orden= coursesA.filter(f=>f.price===0)
          if(orden.length){
            state.cursos=orden
        }else{
          window.alert("No hay")
        }
      }
  },
  favoritos:(state,action)=>{
  
  }
     },
     extraReducers:  (builder) => {
        builder.addCase(PostCursoscart.fulfilled, (state, action) => {
           state.CursosCart.push(action.payload)
          
        })
     },
    
     extraReducers:  (builder) => {
        builder.addCase(getCursos.fulfilled, (state, action) => {
         state.cursos = action.payload
         state.cursosOrigin=action.payload
        })
     }
})
export const {search_Courses,Order2,favoritos} = getCursosSlice.actions;