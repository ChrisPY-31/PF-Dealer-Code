import { createSlice} from "@reduxjs/toolkit"
import { crearUsuario } from "./reducer/addPagos/agregarPago"

const initialState = {
    usuario: []
}

export const usuarioSlice = createSlice({
    name: "usuario",
    initialState,
     reducers: {
        addUsuario: (state, action) => {
          
        }
     },
     extraReducers:  (builder) => {
      builder.addCase(crearUsuario.fulfilled, (state, action) => {
         state.usuario.push(action.payload)
      })
   }
   
})
