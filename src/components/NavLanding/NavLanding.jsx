'use client'
import Link from "next/link";
import React, {useState} from "react";

const NavLanding = () => {

  return (
    <header className="bg-red-600">
      <nav className="h-24 w-11/12  mx-auto flex justify-between items-center">
        <div className="logo text-3xl">Dealer Code</div>

        <ul className="flex w-1/4 justify-around">
          <li className="font-bold text-lg bg-red-400 py-2 px-2 rounded hover:bg-red-600 cursor-pointer">
            <Link href="/Login">
              Iniciar Sesion
            </Link>
          </li>
          <li className="font-bold text-lg bg-indigo-400 py-2 px-2 rounded hover:bg-indigo-600 cursor-pointer">
            Registarse
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavLanding;
