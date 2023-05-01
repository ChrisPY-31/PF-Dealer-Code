"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Menu() {

    let [menu, setMenu] = useState(false)
  return (
   
    <div class="flex justify-end">
        <div class="relative inline-block ">
        
            <button onClick={() => setMenu(!menu)} className="relative z-10 flex items-center  text-sm text-gray-600  border border-transparent  focus:ring-opacity-40 dark:focus:ring-opacity-40  dark:text-white focus:outline-none">
                
                <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                </svg>
            </button>
    
           {
            menu === true ?  <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
            
           <Link href="/Account" legacyBehavior>
           <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Mi cuenta
            </a>
           </Link >

            <Link href="/" legacyBehavior>
            <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Crear un Curso
            </a>
            </Link>

            <Link href="/favorits" legacyBehavior>
            <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Favoritos
            </a>
            </Link>

            <hr className="border-gray-200 dark:border-gray-700 "></hr>
            
            
            <Link href="/" legacyBehavior>
            <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Cerrar secion 
            </a>
            </Link>
        </div> : null
           } 
           
        </div>
    </div>
  )
}

export default Menu
