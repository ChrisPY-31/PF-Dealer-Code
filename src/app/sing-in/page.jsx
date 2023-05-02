"use client";
import loginWithEmailPassword from "@/functions/login";
import { singInWithGoogle } from "../../functions/AuthWithGoogle";
import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
const Page = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const handleClick = () =>{
    const result = singInWithGoogle()
    console.log(result)

        
  }
  const handleSubtmit = async (e) =>{
    e.preventDefault()
   await loginWithEmailPassword(email , password)
  }
// useEffect(() =>{
//   onAuthStateChanged(FirebaseAuth , usuariofirebase => {
//     if(usuariofirebase){
//       router.push('/Home')
//     }
//   })
// },[])
 
  return (
    <div className="h-screen">
      
      <div className="flex justify-center h-full items-center ">
      <div className="w-1/3 h-3/4 bg-green-500 rounded-lg">
        <form className="w-10/12 m-auto" onSubmit={handleSubtmit}>
          <h2 className="text-center mt-2 font-light text-3xl">
            Iniciar Sesion
          </h2>

          <div className="flex flex-col my-5">
            <button
              type="submit"
              value="Ingresar con Google"
              className="bg-indigo-600 m-2 h-12 rounded-lg uppercase"
              onClick={handleClick}
            >Google</button>
            <input
              type="submit"
              value="Ingresar con Git hud"
              className="bg-blue-600 m-2 h-12 rounded-lg uppercase"
            />
          </div>

          <div className="h-20 flex flex-col justify-around">
            <label className=" uppercase font-light text-lg">
              Ingresa tu correo
            </label>
            <input
              type="text"
              className="w-full text-black rounded py-1 pl-3"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="h-20 flex flex-col justify-around">
            <label className=" uppercase font-light text-lg">
              Ingresa tu Contraseña
            </label>
            <input
              type="password"
              className="w-full text-black py-1 pl-3 rounded"
              onChange={(e)=> setPassword(e.target.value)}

            />
          </div>
          <button className="py-2 px-5 rounded-lg uppercase bg-indigo-400 hover:bg-indigo-600 w-full font-medium mt-8">
            Accerder
          </button>
        </form>
        <p className="text-end mt-2 mr-10">
          No tienes cuenta
          <Link href="sing-up" className="cursor-pointer text-blue-400 ">
            ¿Registrate?
          </Link>
        </p>
      </div>
    </div>
      
    </div>
  );
};

export default Page;
