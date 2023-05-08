import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const agregarPago = createAsyncThunk(
    "pagos/agregarPago",
    async (datosDelpago) => {
        const respuesta = await axios.post("http://localhost:3096/post", datosDelpago);
        return respuesta.data
    }
)

export const crearCurso = createAsyncThunk(
    "cursos/crearCurso",
    async (datosdelcurso) => {
        const respuesta = await axios.post("http://localhost:3096/crearcursos", datosdelcurso);
        return respuesta.data
    }
)

export const crearUsuario = createAsyncThunk(
    "usuario/createUsuario",
    async (datosdelUsuario) => {
        const respuesta = await axios.post("http://localhost:3096/secion", datosdelUsuario);
        return respuesta.data
    }
)




