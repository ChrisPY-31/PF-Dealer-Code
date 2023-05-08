'use client'
import React, { useState } from "react";
import Link from "next/link";

const CardCourse = () => {
  const [autentication , setAutentication] = useState(false)
  return (
    <div className="bg-indigo-600 ">
      <div className="">
        <div className="bg-teal-500 h-52 ">
          <img src="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png" alt="" /></div> 
        <div className="w-11/12 m-auto mt-10 ">
          <div>
            <p>
              price
              <span>Descuento</span>
            </p>
            <p>Descuento</p>
          </div>
          <div >
            <div className="flex flex-col justify-between h-14">
              <div className="flex">
                  <Link href="/checkaut" className={!autentication?"py-2.5 w-full bg-lime-500 rounded-md text-center": 'w-64 py-2.5 bg-lime-500 rounded-md text-center'}>
                    {autentication ? <h1>ir al curso </h1>: <h2>Comprar Curso</h2>}
                    
                  </Link>
                  {!autentication && <Link href="/Favorits"><button className="px-4 py-2 bg-red-400 ml-4 rounded-md" >Fav</button></Link> }
              </div>
            </div>
            {!autentication &&
            <button className="py-2.5 w-full bg-slate-600 rounded-lg">
            Agregar a la Cesta
          </button>
            }
            
          </div>
          <div>
            <h2>Que incluye este Curso</h2>
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
