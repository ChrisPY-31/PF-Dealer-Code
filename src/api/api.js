import axios from "axios";


export const dealerApi = axios.create({
    baseURL:'https://dealer-code.fly.dev/'
})