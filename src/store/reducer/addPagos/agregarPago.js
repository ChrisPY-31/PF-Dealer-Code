import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const agregarPago = createAsyncThunk(
    "pagos/agregarPago",
    async (datosDelpago) => {
        const respuesta = await axios.post("http://localhost:3001/checkaout", datosDelpago);
        return respuesta.data
    }
)
