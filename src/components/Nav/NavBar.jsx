import React from 'react'
import Link from 'next/link'
import {RxMagnifyingGlass} from "react-icons/rx"
import {BsCart4} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import {MdOutlineKeyboardArrowDown} from"react-icons/md"
import Image from 'next/image'
import Logo from "../../Imagenes/Logo.png"
export default function NavBar() {
  return (

    <div className=" bg-tarawera-700 flex flex-wrap items-center justify-around ">
       <Image className="absolute p-0 left-0 mt-1" src={Logo} alt="Logo" width={200} height={200}></Image>
        <div className="flex ml-32">
            <Link href="/course">
            <ul className="mr-5 hover:underline  decoration-white">Explorar Cursos</ul>
            </Link>
            <Link href="/Favorits">
            <ul className="hover:underline decoration-white">Favoritos</ul>
            </Link>
        </div>
        <div className="flex flex-wrap items-center">
            <Link href="/Home">
        <h1 className="bg-green-400  pl-3 pr-3 rounded-md hover:bg-green-500">Inicio</h1>
        </Link>
           <div className="flex flex-wrap items-center p-2 ml-5 m-2 rounded-xl bg-tarawera-500">
            <button className="  p-1 mr-2 top-5 text-gray-950 rounded-full"><RxMagnifyingGlass/></button>
            <input placeholder='¿Que buscas aprender?' type="text" className="p-1 placeholder-black bg-transparent"></input>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
            <button className='mr-5 p-1 rounded-xl hover:bg-tarawera-600'><BsCart4/></button>
            <div className="flex flex-wrap items-center p-2 rounded-xl bg-green-600 hover:bg-green-700"><p className='mr-1'><MdOutlineKeyboardArrowDown/></p><BsPersonCircle/></div>

        </div>
    </div>
  )
}
/* lupa=RxMagnifyingGlass
carrito=BsCart4
usuario=BsPersonCircle */