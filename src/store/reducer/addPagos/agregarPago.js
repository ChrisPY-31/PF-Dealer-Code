import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const agregarPago = createAsyncThunk(
    "pagos/agregarPago",
    async (datosDelpago) => {
        const respuesta = await axios.post("https://dealer-code.fly.dev/purchase/stripe", datosDelpago);
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


export const cursosPagos = createAsyncThunk(
    "cursosPagos/ccursosPagos",
    async () => {
        const respuesta = await axios.get("https://dealer-code.fly.dev/purchase/getPagos",);
        return respuesta.data
    }
)

export const PostCursoscart = createAsyncThunk(
    "cursos/getCursoscarts",
    async (id, id2) => { 
        console.log(obj);
        const respuesta = await axios.post(`http://localhost:3096/cart`,obj);
        return respuesta.data
    }
)
 
export const getCursos = createAsyncThunk(
    "cursos/getCursos",
    async () => {
        const respuesta = await axios.get(`https://dealer-code.fly.dev/course`);
        return respuesta.data
    }
)

export const getComprados = createAsyncThunk(
    "comprados/getComprados",
    async (cookie) => { 
        console.log(cookie);
        const respuesta = await axios.post("http://localhost:3096/comprados", cookie);
        return respuesta.data
    }
)



 

