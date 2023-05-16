"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { FirebaseAuth } from "@/firebase/credenciales";
import { onAuthStateChanged } from "firebase/auth";
import { UseLocalStorage } from "@/Comonents/carrito/useLocalStorage";




const CardCourse = ({titulo, instructor,  categoria, precio, descripcion, id }) => {
  const [autentication , setAutentication] = useState(false)
  
  let dispacth = useDispatch()

  let token;
  onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      token = usuarioFirebase.accessToken;
    } else {
      return router.push("/sing-in");
    }
  });

  

  let [producto, setProducto] = UseLocalStorage("producto", [])

  return (
    <div className="bg-indigo-600 h-full ">
        <div className="bg-teal-500 h-52 ">
          <video
            poster="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"
            controls
            autoplay
          >
            <source
              src="https://mp4-b.udemycdn.com/2019-11-11_03-26-28-83ee4f30a513930b69d63e4f5bf9d76f/WebHD_720p.mp4?secure=LmApl1zVZFvc9Ii8-sgKQQ%3D%3D%2C1684264912"
              type="video/mp4"
            />
          </video>
        </div>

        
    </div>
  );
};

{/* <div className="w-11/12 m-auto mt-10 ">
          <div>
            <h4 className="text-2xl">{title}</h4>
            <p className="my-1">
              <span className="text-lg">{price} MX</span>
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-between h-14">
              <div className="flex">
                <Link
                  href="checkaut/[id]"
                  as={`/checkaut/${id}`}
                  className={
                    !autentication
                      ? "py-2.5 w-full bg-lime-400 rounded-md text-center"
                      : "w-64 py-2.5 bg-transparent rounded-md text-center"
                  }
                >
                  {autentication ? (
                    <h1 className="text-black"> ir al curso </h1>
                  ) : (
                    <h1 className="">Comprar curso</h1>
                  )}
                </Link>
                {!autentication && (
                  <Link href="/Favorits">
                    <button className="px-4 py-2 bg-red-400 ml-4 rounded-md">
                      Fav
                    </button>
                  </Link>
                  {!autentication && 
                    <Link href="/Favorits"><button className="px-4 py-2 bg-red-400 ml-4 rounded-md" >Fav</button></Link>
                  }
              </div>
            </div>
            {!autentication &&
              <button onClick={
                () => setProducto([ {
                  titulo, instructor,  categoria, precio, idP: producto.length
                } ])
              } className="py-2.5 w-full bg-slate-600 rounded-lg">
              Agregar a la Cesta
            </button>
              }
          </div>
          <div>
            <div>
              <div className="flex my-4">
                <img
                  className="w-7 "
                  src="https://cdn-icons-png.flaticon.com/512/2912/2912761.png"
                  alt="certificado imagen"
                />
                <p className="ml-4">Certificado final del curso</p>
              </div>
              <div className="flex my-4">
                <img
                  className="w-7 "
                  src="https://cdn-icons-png.flaticon.com/512/1170/1170696.png"
                  alt="video"
                />
                <p className="ml-4">7 horas del curso</p>
              </div>
              <div className="flex my-4">
                <img
                  className="w-7 "
                  src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
                  alt="descargables"
                />
                <p className="ml-4">Recursos descargables</p>
              </div>
            </div>
          </div> */}
export default CardCourse;
