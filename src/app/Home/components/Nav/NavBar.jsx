"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {BsCart4} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import Image from 'next/image'
import Logo from "../../../../Imagenes/Logo.png"
import Menu from '@/Comonents/Menu/Menu'
import { SearchInput } from '../Search/searchInput'
import { reset } from '@/store/reducer'
import { useDispatch } from 'react-redux'

export default function NavBar() {
  const dispatch= useDispatch()
  function handleReset(){
    dispatch(reset())
  }
  const [producto, setProducto] = useState(
    JSON.parse(window.localStorage.getItem("producto") || [] )
  )

useEffect(() => {

}, [producto])

  return (
    <div className=" flex flex-wrap items-center justify-around shadow-amber-50 shadow p-1">
       <Image className="absolute p-0 left-0" src={Logo} alt="Logo" width={80} height={80}></Image>
       <Link href="/Home">
       <div className=' ml-7'>
       <h1 className='text-lg font-bold mr-32'>DealerCode</h1>
       </div>
       </Link>

        <div className="flex text-medio">
        
       
       <div><Link href="/Home">
          <ul className="mr-5 hover:underline  decorat:null}ion-white">Inicio</ul>
        </Link></div>
            <Link href="/Home/Course">
            <button onClick={handleReset} className="mr-5 hover:underline decoration-white">Explorar Cursos</button>
            </Link>
            <Link href="/Favorits">
            <ul className="hover:underline decoration-white">Favoritos</ul>
            </Link>
        </div>
        <SearchInput/>
        <div className="flex flex-wrap items-center">
         <Link href="/cart">
         <div className='mr-5 p-1 rounded-xl hover:bg-tarawera-600 flex '>
          { producto.length > 0  ?  <span className='text-[8px] mt-2 text-red-700   '> {producto.length} </span> : null }
          <BsCart4  className='' />
          
         </div>
         </Link>
            <div className="flex flex-wrap items-center p-2 rounded-xl">
              <BsPersonCircle/>
            </div>
             <Menu/>
        </div>
    </div>
  )
}