import { configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "./reducer/course";
import { useDispatch } from "react-redux";
import {pasarela} from "./reducer/addPagos/addPago"
import { useMemo } from "react";
import { usuarioSlice } from "./usuario";
import { cursosSlice } from "./reducer/cursos";

export const store = configureStore({
    reducer: {
        course: courseSlice.reducer,
        pagos: pasarela.reducer,
        cursos: cursosSlice.reducer,
         usuarios: usuarioSlice.reducer
    }   
}
)

export function useAppDispatch() {
    return useDispatch();
  }
  
  export function useAppSelector(selector) {
    return useMemo(() => selector(store.getState()), [selector]);
  }