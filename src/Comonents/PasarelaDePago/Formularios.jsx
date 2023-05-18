"use client"
import { useState } from "react"
import {loadStripe} from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Producto from "./Producto"
import {agregarPago} from "../../store/reducer/addPagos/agregarPago"
import { useDispatch } from "react-redux"
import { FirebaseAuth } from "@/firebase/credenciales";
import { onAuthStateChanged } from "firebase/auth";


let stipePromise = loadStripe("pk_test_51N3WCTG4n6v6zt1DCpKO742a1RORPW5iGwRMf3A1UgkNXuKHXPhTnIJeP9iEnlqlXKUAJ028VgOM9rpPMho3Aplk00FLkHnUtO")

let ChechautForm = () => {
    let stripe = useStripe()
    let element = useElements()

  let dispach = useDispatch()
  
  const [producto, setProducto] = useState(
    JSON.parse(window.localStorage.getItem("producto") || [] )
  )

  let [pCheckauyt, sePckeckaut] = useState(
    JSON.parse(window.localStorage.getItem("pCheckaut") || [] )
  )


 let compra = producto.length  > 0 ? producto : pCheckauyt
 console.log(compra);
 var sumaPrice = compra.reduce((total, producto) => total + producto.precio, 0 );
  console.log(sumaPrice);
  let idCursos = compra.map(i => i.id)
 console.log(idCursos);
  const removeItem = (idCursos) => {
   idCursos.forEach(e => {
    var updatedProducto  =  pCheckaut.filter(item => item.id !== e) 
    if(typeof localStorage !== undefined){
    localStorage.setItem("pCheckaut", JSON.stringify(updatedProducto))
    sePckeckaut(updatedProducto)}
   });
 }
  
  
    return (
      <div className="text-white flex justify-center items-center gap-20 ml-5 ">
            <div className="w-1/2  ">
                <Formik 
                initialValues={{
                    nombre: "",
                    correo: ""
                }}

                validate={(valors) => {
                    let errors = {}
                    let {nombre, correo} = valors
                    if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombre)) {
                     errors.nombre = "El nombre solo puede tener letas y espacions"
                  } 
                   if(nombre.length === 0) { 
                    errors.nombre ="ingrasa tu nombre por favor"
                  }

                  if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correo)) {
                    errors.correo = "El correo solamente puede contener letras, numeros, puntos, giones y gion bajo"
                  }

                  if(correo.length === 0) {
                   errors.correo = "ingrasa tu correo por favor"
                  }
                  return errors
 
                 }}
 
                 onSubmit={  async ( valores, {resetForm}) => {
                   resetForm()
                   console.log(valores);
                   let {error, paymentMethod} = await stripe.createPaymentMethod({
                     type: "card",
                     card: element.getElement(CardElement)
                    })
                    if(!error) {
                      
                      let {id} = paymentMethod
                      onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
   
                        if (usuarioFirebase) {
                          dispach(agregarPago({
                               token: usuarioFirebase.accessToken,
                               amount: sumaPrice,
                      id, 
                    email: valores.correo,
                    nombre: valores.nombre,
                    idCursos: idCursos
                            }))
                            removeItem(idCursos)
                        } 
                      });
                   
                      
                    } else {
                      console.log(error);
                    }
                  
                 }}
                >
               {({errors}) => (
                 <Form  className=" columns-4 gap-5 flex flex-col" >
                 <div className="flex flex-col">
                     <label htmlFor="">Correo</label>
                 <Field type="text" name="correo"     className="h-7 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50  " 
                 placeholder="correo@ejemplo.com" />
                 { <ErrorMessage name="correo" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.correo}</span>
               )} />   }
                 </div>
                 <div className="flex flex-col">
                     <label htmlFor="">Nombre</label>
                     <Field type="text" name="nombre"   placeholder="Toni" className="h-7 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " />
                   { <ErrorMessage name="nombre" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.nombre}</span>
               )} />   }
                 </div>
                 <div className="flex flex-col">
                     <label htmlFor="">Numero de la targeta</label>
                 <CardElement className="h-7 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 "/>
                 </div>
                  <div className="flex flex-col">
                     <button type="submit" disabled={!stripe} className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                        Comprar
                     </button>
                  </div>
             </Form>
               )}
                </Formik>

            </div>
            <div className="w-1/2">
                <Producto />
            </div>
      </div>
    )
}


export default function Formularios ({titulo, monto, idCurso, rating})  {

    

    return (
        <div className="max-w-2xl mx-auto px-4 md:px-0 ">
           
           <Elements stripe={stipePromise}>
              <ChechautForm 
                titulo = {titulo}
                 monto={monto} idCurso={idCurso}
                 rating={rating} />
           </Elements>

        </div>
    )
}


