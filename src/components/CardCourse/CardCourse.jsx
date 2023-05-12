'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { PostCursoscart } from "@/store/reducer/addPagos/agregarPago";
import { FirebaseAuth } from "@/firebase/credenciales";
import { onAuthStateChanged } from "firebase/auth";
import { UseLocalStorage } from "@/Comonents/carrito/useLocalStorage";




const CardCourse = ({titulo, instructor, video, descripcion, categoria, precio, id, }) => {
  const [autentication , setAutentication] = useState(false)
  
  let dispacth = useDispatch()
  console.log(id);
  let token;
  onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
    
    if (usuarioFirebase) {
       token = usuarioFirebase.accessToken
       console.log(token)
    } else {
      return router.push("/sing-in");
    }
  });

  let obj = {
    titulo, instructor, video, descripcion, categoria, precio, id, 
  }

  let [producto, setProducto] = UseLocalStorage("producto", [])


  return (
    <div className="bg-indigo-600 ">
      <div className="">
        <div className="bg-teal-500 h-52 ">
          <img src="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png" alt="" /></div> 
        <div className="w-11/12 m-auto mt-10 ">
          <div>
            <h4>{titulo}</h4>
            <p>
             <span> {precio} US</span>
              <span>Descuento</span>
            </p>
            <p>{titulo}</p>
          </div>
          <div >
            <div className="flex flex-col justify-between h-14">
              <div className="flex">
                  <Link href="checkaut/[id]" as={`/checkaut/${id}`} className={!autentication?"py-2.5 w-full  rounded-md text-center": 'w-64 py-2.5 bg-transparent rounded-md text-center'}>
                    {autentication ? <h1 className="text-black"> ir al curso </h1>: null }
                    
                  </Link>
                  {!autentication && <Link href="/Favorits"><button className="px-4 py-2 bg-red-400 ml-4 rounded-md" >Fav</button></Link> }
              </div>
            </div>
            {!autentication &&
            <button onClick={
              () => setProducto([...producto, obj])
            } className="py-2.5 w-full bg-slate-600 rounded-lg">
            Agregar a la Cesta
          </button>
            }
            
          </div>
          <div>
            <h2>{descripcion}</h2>
            <div>
              <div>
                <p>image</p>
                <p>Certificado final del curso</p>
              </div>
              <div>
                <p>image</p>
                <p>7 horas del curso</p>
              </div>
              <div>
                <p>image</p>
                <p>Recursos descargables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
