"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {BsCart4} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import Image from 'next/image'
import Logo from "../../../../Imagenes/Logo.png"
import Menu from '@/Comonents/Menu/Menu'
import { SearchInput } from '../Search/searchInput'
//aqui esta la navBar que se renderizara en la mayoria de rutas
export default function NavBar() {
  //esta funcion sirve para resetear todos los cursos
  

  return (
    <div className=" flex flex-wrap items-center justify-around shadow-amber-50 shadow p-1">
       <Image className="absolute p-0 left-0" src={Logo} alt="Logo" width={80} height={80}></Image>
       <Link href="/Home">
       <div className=' ml-7'>
       <h1 className='text-lg font-bold mr-32'>DealerCode</h1>
       </div>
       </Link>

        <div className="flex text-medio">
        
       {/*haciendo click te llevara a la ruta /Home*/}
       <div><Link href="/Home">
          <ul className="mr-5 hover:underline  decorat:null}ion-white">Inicio</ul>
        </Link></div>
        {/*haciendo click te llevara a la ruta /Home/Course ademas se resetearan los cursos*/}
            <Link href="/Home/Course">
            <button className="mr-5 hover:underline decoration-white">Explorar Cursos</button>
            </Link>
            {/*haciendo click te llevara a la ruta /Favorits*/}
            <Link href="/Favorits">
            <ul className="hover:underline decoration-white">Favoritos</ul>
            </Link>
        </div>
        {/*aqui se renderiza el input de busqueda para buscar un curso*/}
        <SearchInput/>
        <div className="flex flex-wrap items-center">
         <Link href="/cart">
         <div className='mr-5 p-1 rounded-xl hover:bg-tarawera-600 flex '>
          
          <BsCart4  className='' />
          
         </div>
         </Link>
            <div className="flex flex-wrap items-center p-2 rounded-xl">
              <BsPersonCircle/>
            </div>
            {/*aqui se renderiza el menu*/}
             <Menu/>
        </div>
    </div>
  )
}