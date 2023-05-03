"use client";
import loginWithEmailPassword from "@/functions/login";
import { singInWithGoogle } from "../../functions/AuthWithGoogle";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../Imagenes/Logo.png";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { useNavigate } from "react-router-dom";
const Page = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    const result = singInWithGoogle();
    console.log(result);
  };
  const handleSubtmit = async (e) => {
    e.preventDefault();
    await loginWithEmailPassword(email, password);
  };
  useEffect(() =>{
    onAuthStateChanged(FirebaseAuth , usuariofirebase => {
      if(usuariofirebase){
        console.log('hola')
        navigate('/Home')
      }
    })
  },[])

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
          <form className="w-10/12 m-auto " onSubmit={handleSubtmit}>
            <h2 className="text-5xl text-white font-bold text-center">
              Iniciar Sesion
            </h2>

            <div className="flex flex-row my-5">
              <button
                type="submit"
                value="Ingresar con Google"
                className="bg-indigo-600 m-2 h-12 rounded-lg uppercase w-1/2"
                onClick={handleClick}
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
                Ingresa tu correo
              </label>
              <input
                type="text"
                className="w-full text-black rounded py-1 pl-3"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="h-20 flex flex-col justify-around">
              <label className=" uppercase font-light text-lg">
                Ingresa tu Contraseña
              </label>
              <input
                type="password"
                className="w-full text-black py-1 pl-3 rounded"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="rounded-md bg-teal-600 px-5 py-2.5 text-lg uppercase font-medium text-white shadow w-full mt-6 hover:bg-teal-800">
              Accerder
            </button>
            <p className="text-end mt-2 mr-10">
              No tienes cuenta { }
              <Link href="sing-up" className="cursor-pointer text-blue-400 ">
                 ¿Registrate?
              </Link>
            </p>
          </form>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
