import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {pasarela} from "./reducer/addPagos/addPago"
import { useMemo } from "react";
import { usuarioSlice } from "./usuario";
import { cursosPagados } from "./reducer/addPagos/getPagos";
import { getCursosSlice } from "./reducer/cursos";
import {getCursoIdSlice} from "./reducer/getCursosId"
import { postCursosSliceCart } from "./reducer/posCart";
import { getCompradosSlice } from "./reducer/getComprados";
import { categoriasSlice } from "./reducer/categorias/categorias";
import { filterSlice } from "./reducer/categorias/filtrarCategorias";

export const store = configureStore({
    reducer: {
         pagos: pasarela.reducer, 
        usuarios: usuarioSlice.reducer,
          cursospagos: cursosPagados.reducer, 
         getCursos: getCursosSlice.reducer,
         cursoId: getCursoIdSlice.reducer,
          postCart: postCursosSliceCart.reducer,
         getcomprados: getCompradosSlice.reducer, 
         categorias: categoriasSlice.reducer,
         filter:filterSlice.reducer
    }   
}
)

export function useAppDispatch() {
    return useDispatch();
  }
  
  export function useAppSelector(selector) {
    return useMemo(() => selector(store.getState()), [selector]);
  }