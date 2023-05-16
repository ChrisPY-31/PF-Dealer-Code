"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {BsCart4} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import Image from 'next/image'
import Logo from "../../../../Imagenes/Logo.png"
import Menu from '@/Comonents/Menu/Menu'
import { SearchInput } from '../Search/searchInput'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '@/firebase/credenciales'
import Hover from '../cartHover/Hover'
//aqui esta la navBar que se renderizara en la mayoria de rutas
export default function NavBar() {
  //esta funcion sirve para resetear todos los cursos
  
  const [producto, setProducto] = useState(
    JSON.parse(window.localStorage.getItem("producto") || [] )
  )
useEffect(() => {
}, [producto])  
const [boolean,setBoolean]=useState(false)
var [hover, setHover]=useState(false)
useEffect(()=>{
  onAuthStateChanged(FirebaseAuth , usuarioFirebase =>{
  if(usuarioFirebase){
    setBoolean(true)
  }else{
    setBoolean(false)
  }})
},[])

  return (
    <div className=" flex flex-wrap items-center justify-around shadow-amber-50 shadow p-1">
       <Image className="absolute p-0 left-0" src={Logo} alt="Logo" width={80} height={80}></Image>
       <Link href={!boolean?"/":"/Home"}>
       <div className=' ml-7'>
       <h1 className='text-lg font-bold mr-32'>DealerCode</h1>
       </div>
       </Link>

        <div className="flex text-medio">
        
       {/*haciendo click te llevara a la ruta /Home*/}
       {boolean?<div><Link href="/Home">
          <ul className="mr-5 hover:underline">Inicio</ul>
        </Link></div>:null}
        {/*haciendo click te llevara a la ruta /Home/Course ademas se resetearan los cursos*/}
            <Link href="/Course">
            <button className="mr-5 hover:underline decoration-white">Explorar Cursos</button>
            </Link>
            {/*haciendo click te llevara a la ruta /Favorits*/}
            {boolean?<Link href="/Home/Favorits">    
      <ul className="hover:underline decoration-white">Favoritos</ul>
            </Link>:null}
        </div>
        {/*aqui se renderiza el input de busqueda para buscar un curso*/}
        <SearchInput/>
        
          
        <div className="flex flex-wrap items-center">
         <Link href="/cart">
         <div className='mr-5 p-1 rounded-xl hover:bg-tarawera-600 flex '>
          {//{ producto.length > 0  ?  <span className='text-[8px] mt-2 text-red-700   '> {producto.length} </span> : null }
          }
          <BsCart4  className='' />
          
         </div>
         </Link>}
      {hover?<Hover></Hover>:null}
  
    
      {!boolean?<Link href="/sing-up"><button className="rounded-md m-0.5 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600">Registrarse</button></Link>:
      <div className='flex items-center'>
      <div className="flex flex-wrap items-center p-2 rounded-xl">
              <BsPersonCircle/>
            </div>
            {/*aqui se renderiza el menu*/}
             <Menu/></div>  }
        </div>
    </div>
  )
}