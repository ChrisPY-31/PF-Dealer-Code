
import React from 'react'
import Link from 'next/link'
import {RxMagnifyingGlass} from "react-icons/rx"
import {BsCart4} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import {MdOutlineKeyboardArrowDown} from"react-icons/md"
import Image from 'next/image'
import Logo from "../../src/Imagenes/Logo.png"
import Menu from '@/Comonents/Menu/Menu'
export default function NavBar() {
  return (

    <div className=" flex flex-wrap items-center justify-around ">
       <Image className="absolute p-0 left-0 ml-2" src={Logo} alt="Logo" width={80} height={80}></Image>
       <h1 className='text-lg font-bold '>DealerCode</h1>
        <div className="flex ml-32 text-medio">
        <Link href="/Home">
        <ul className="mr-5 hover:underline  decoration-white">Inicio</ul>
        </Link>
            <Link href="/course">
            <ul className="mr-5 hover:underline  decoration-white">Explorar Cursos</ul>
            </Link>
            <Link href="/Favorits">
            <ul className="hover:underline decoration-white">Favoritos</ul>
            </Link>
           
        </div>
        <div className="flex flex-wrap items-center">
           <div className="flex flex-wrap items-center  ml-5 m-2 rounded-lg bg-[#052345]">
            <button className="  p-1 ml-2 mr-1 text-lg text-verde top-5 rounded-full"><RxMagnifyingGlass/></button>
            <input placeholder='¿Que buscas aprender?' type="text" className="p-1 text-sm outline-none placeholder-gray-400 bg-transparent"></input>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
            <button className='mr-5 p-1 rounded-xl hover:bg-tarawera-600'><BsCart4/></button>
            <div className="flex flex-wrap items-center p-2 rounded-xl">
              <BsPersonCircle/>
            </div>
             <Menu/>
        </div>
    </div>
  )
}
/* lupa=RxMagnifyingGlass
carrito=BsCart4
usuario=BsPersonCircle */