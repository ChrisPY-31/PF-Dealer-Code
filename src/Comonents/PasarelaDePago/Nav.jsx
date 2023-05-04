import Image from 'next/image'
import React from 'react'
import logo from "../../Imagenes/Logo.png"
import Link from 'next/link'

function Nav() {
  return (
    <nav
    aria-label="Site Nav"
    className="mx-auto flex max-w-3xl text-white items-center justify-between p-4 "
  >
    <div
  className=' gap-0'
     
    >
     <Image
     src={logo}
     alt='logo'
     width={100}
     height={100}
     className="inline-flex m-0  items-center justify-center   rounded-lg"
     />
   
    </div>
  
    <ul className="flex items-center gap-2 text-sm font-medium">
      <li className="hidden lg:block hover:rounded-sm hover:bg-verde hover:text-black hover:transition-all">
      <Link href="/Home">
       <span className="rounded-lg px-3 py-2" href="/Home">Home </span>
       </Link>
      </li>
  
     
  
      <li className="hidden lg:block hover:rounded-sm hover:bg-verde hover:text-black">
        <a
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
          href=""
          target="_blank"
        >
          Continuar en otra pestaña
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
  
  )
}

export default Nav
