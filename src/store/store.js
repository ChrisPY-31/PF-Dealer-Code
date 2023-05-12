import { configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "./reducer/course";
import { useDispatch } from "react-redux";
import {pasarela} from "./reducer/addPagos/addPago"
import { useMemo } from "react";
import { usuarioSlice } from "./usuario";
import { cursosSlice } from "./reducer/cursos";
import { cursosPagados } from "./reducer/addPagos/getPagos";
import { getCursosSlice } from "./reducer/getCursos";
import {getCursosIdSlice} from "./reducer/getCursosId"
import { postCursosSliceCart } from "./reducer/posCart";
import { getCompradosSlice } from "./reducer/getComprados";

export const store = configureStore({
    reducer: {
        course: courseSlice.reducer,
        pagos: pasarela.reducer,
        cursosPost: cursosSlice.reducer,
         usuarios: usuarioSlice.reducer,
         cursospagos: cursosPagados.reducer,
         getCursos: getCursosSlice.reducer,
         cursoId: getCursosIdSlice.reducer,
         postCart: postCursosSliceCart.reducer,
         getcomprados: getCompradosSlice.reducer
    }   
}
)

export function useAppDispatch() {
    return useDispatch();
  }
  
  export function useAppSelector(selector) {
    return useMemo(() => selector(store.getState()), [selector]);
  }