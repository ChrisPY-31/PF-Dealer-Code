'use client'
import registerUser from '../../functions/registerUser'
import Link from 'next/link'
import React from 'react'
import { useState , useEffect} from 'react'
import Logo from "../../Imagenes/Logo.png";

import Image from 'next/image'

const page = () => {
  const [correo , setCorreo] = useState('')
  const [password , setPassword] = useState('')
  const handleSubmit = async(e) =>{
    e.preventDefault()
    await registerUser(correo , password)
  }
  
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center  ">
        <Image
          className="absolute p-0 left-2 top-0"
          src={Logo}
          alt="Logo"
          width={75}
          height={75}
        />
        <Link
          className="absolute ml-20 text-lg font-bold p-0 left-0 top-6 cursor-pointer"
          href={"/"}
        >
          DealerCode
        </Link>
      </div>

      <div className="flex justify-center h-full items-center flex-col ">
        <div className="w-1/2 h-3/4 flex flex-col items-center ">
          <form className="w-10/12 m-auto "onSubmit={handleSubmit} >
            <h2 className="text-5xl text-white font-bold text-center">
              Registrate
            </h2>

            <div className="flex flex-row my-5">
              <button
                type="submit"
                value="Ingresar con Google"
                className="bg-indigo-600 m-2 h-12 rounded-lg uppercase w-1/2"
                
              >
                Google
              </button>
              <button
                type="submit"
                value="Ingresar con Git hud"
                className="bg-blue-600 m-2 h-12 rounded-lg uppercase w-1/2"
              >
                Githud
              </button>
            </div>

            <div className="h-20 flex flex-col justify-around">
              <label className=" uppercase font-light text-lg">
                Ingresa tu Nombre
              </label>
              <input
                type="text"
                className="w-full text-black rounded py-1 pl-3"
                placeholder='Nombre'
              />
            </div>

            <div className="h-20 flex flex-col justify-around">
              <label className=" uppercase font-light text-lg">
                Ingresa tu correo
              </label>
              <input
                type="text"
                className="w-full text-black rounded py-1 pl-3"
                placeholder='Correo'
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="h-20 flex flex-col justify-around">
              <label className=" uppercase font-light text-lg">
                Ingresa tu Contraseña
              </label>
              <input
                type="password"
                className="w-full text-black py-1 pl-3 rounded"
                placeholder='Contraseña'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="rounded-md bg-teal-600 px-5 py-2.5 text-lg uppercase font-medium text-white shadow w-full mt-6 hover:bg-teal-800">
              Accerder
            </button>
            <p className="text-end mt-2 mr-10">
              ¿Ya tienes cuenta? { }
              <Link href="sing-in" className="cursor-pointer text-blue-400 ">
                 Inicia Sesion
              </Link>
            </p>
          </form>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page