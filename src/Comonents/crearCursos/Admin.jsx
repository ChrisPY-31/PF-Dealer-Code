"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../Imagenes/Logo.png"
import Link from 'next/link'
import General from './General'
import Create from './Create'

function Crear() {
let  [whatInfo, setWhatInfo] = useState({
  general: true,
  create: false
})


  return (
    <div className='flex'>
      <div className="w-72 text-white flex h-screen flex-col justify-between cursor-pointer ">
  <div className="px-4 py-6 ">
         <Link href="/Home">
         <div
        className="flex items-center  rounded-lg "
      >
         <Image
        src={Logo}
        alt='Logo'
        
        className='h-14 w-14 '
        />
       

        <span className="text-sm font-bold"> DelearCode </span>
      </div>
         </Link>

    <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
     

    <a
        href="#"
        className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>

        <span onClick={() => setWhatInfo({
           general: true,
           create: false
        }) } className="text-sm font-medium"> General </span>
      </a>

      <a
        href="#"
        className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>

        <span onClick={() => setWhatInfo({
           general: false,
           create: true
        }) } className="text-sm font-medium"> Crear curso </span>
      </a>

     

     
    </nav>
  </div>

  <div className="sticky inset-x-0 bottom-0 ">
    <a href="#" className="flex items-center gap-2 p-4 hover:bg-blue-500">
      <img
        alt="Man"
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div>
</div>


{whatInfo.general === true ? <General/> : null}
{whatInfo.create === true ? <Create/> : null}

    </div>
  )
}

export default Crear
