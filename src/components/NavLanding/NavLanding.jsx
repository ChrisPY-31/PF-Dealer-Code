'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Logo from "../../Imagenes/Logo.png"
const NavLanding = () => {
   

  return (
// <<<<<<< HEAD
//     <header className="bg-red-600">
//       <nav className="h-24 w-11/12  mx-auto flex justify-between items-center">
//         <div className="logo text-3xl cursor-pointer" >Dealer Code</div>

//         <ul className="flex w-1/4 justify-around">
//           <li className="font-bold text-lg bg-red-400 py-2 px-2 rounded hover:bg-red-600 cursor-pointer">
//             <Link href="/sing-in" >
//               Iniciar Sesion
//             </Link>
//           </li>
//           <li className="font-bold text-lg bg-indigo-400 py-2 px-2 rounded hover:bg-indigo-600 cursor-pointer">
//             <Link href='/sing-up' >
//             Registarse
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
// =======
    <header aria-label="Site Header" class="">
    <div class="mx-auto mr-5  max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
        <Image className="absolute p-0 left-0 " src={Logo} alt="Logo" width={100} height={100}></Image>
        <span className="absolute ml-20 text-lg font-bold p-0 left-0 ">DealerCode</span>
        </div>
  
        <div class=" md:flex md:items-center md:gap-12  ">
          <div class="flex  gap-4">
            <div class="sm:flex sm:gap-4">
             <Link href="/Login" legacyBehavior >
             <a
             
                class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
              >
                Iniciar sesion 
              </a>
             </Link>
  
              <div class="hidden sm:flex">
                <a
                  class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="/"
                >
                  Registrarse
                </a>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </header>
// >>>>>>> 9ff1ed36b8183d6ba944a9e125653535712fca23
  );
};

export default NavLanding;
