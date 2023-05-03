/* import React from 'react'
import Link from 'next/link'
import {BsCart4} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import {MdOutlineKeyboardArrowDown} from"react-icons/md"
import Image from 'next/image'
import Logo from "../../../../Imagenes/Logo.png"
import { SearchInput } from '../Search/searchInput'
import { useDispatch } from 'react-redux'
import { reset } from '@/store/reducer'

export default function NavBar() {
  const dispatch= useDispatch()
 function handleReset(){
  dispatch(reset())
 }
  return (
    <div className=" bg-tarawera-700 flex flex-wrap items-center justify-around ">
       <Image className="absolute p-0 left-0 mt-1" src={Logo} alt="Logo" width={80} height={80}></Image>
        <div className="flex ml-32">
            <Link href="/Home/Course">
            <ul className="mr-5 hover:underline  decoration-white">Explorar Cursos</ul>
            </Link>
            <Link href="/Favorits">
            <ul className="hover:underline decoration-white">Favoritos</ul>
            </Link>
        </div>
        <div className="flex flex-wrap items-center">
            <Link href="/Home">
        <h1 onClick={handleReset} className="bg-green-400  pl-3 pr-3 rounded-md hover:bg-green-500">Inicio</h1>
        </Link>
           <SearchInput/>
        </div>
        <div className="flex flex-wrap items-center">
            <button className='mr-5 p-1 rounded-xl hover:bg-tarawera-600'><BsCart4/></button>
            <div className="flex flex-wrap items-center p-2 rounded-xl bg-green-600 hover:bg-green-700"><p className='mr-1'><MdOutlineKeyboardArrowDown/></p><BsPersonCircle/></div>
        </div>
    </div>
  )
} */
import React from 'react'
import Link from 'next/link'
import {BsCart4} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import Image from 'next/image'
import Logo from "../../../../Imagenes/Logo.png"
import Menu from '@/Comonents/Menu/Menu'
import { SearchInput } from '../Search/searchInput'

export default function NavBar() {
  return (
    <div className=" flex flex-wrap items-center justify-around shadow-amber-50 shadow p-1">
       <Image className="absolute p-0 left-0" src={Logo} alt="Logo" width={80} height={80}></Image>
       <Link href="/Home">
       <div className=' ml-7'>
       <h1 className='text-lg font-bold mr-32'>DealerCode</h1>
       </div>
       </Link>
        <div className="flex text-medio">
        
        <Link href="/Home">
        <ul className="mr-5 hover:underline decoration-white">Inicio</ul>
        </Link>
            <Link href="/Home/Course">
            <ul className="mr-5 hover:underline  decoration-white">Explorar Cursos</ul>
            </Link>
            <Link href="/Favorits">
            <ul className="hover:underline decoration-white">Favoritos</ul>
            </Link>
        </div>
        <SearchInput/>
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