'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Logo from "../../Imagenes/Logo.png"
const NavLanding = () => {

  return (
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
  );
};

export default NavLanding;
