"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import NavBar from '../components/Nav/NavBar'
export default function Favorits() {
    const [Fav,setFav]= useState( 
     
      JSON.parse(window.localStorage.getItem("Fav") || [] )
    )
    const removeItem = (id) => {
      const updatedProducto  = Fav.filter(item => item.id !== id) 
      window.localStorage.setItem("Fav", JSON.stringify(updatedProducto))
      setFav(updatedProducto)
   }

  return (
    <div>
      <NavBar></NavBar>
        {Fav.length?Fav.map((f,index)=>(
          <div className='bg-red-300'>
            <div className='flex'>
              <button className='p-2 bg-red-950' onClick={()=>removeItem(f.id)}>❌</button>
      <div className='flex items-center p-10 pl-16 pr-16'>{f.imagen}</div>
      <div className='flex flex-col'>
  <h1 className="font-bold text-gray-950" key={index}>{f.titulo}</h1>
  <h2 className='mt-2 h-11'>{f.descripcion}</h2>
  <p className='mt-2 text-xs font-bold  text-gray-950'>instructor: {f.instructor}</p>
{/*aqui se esta la logica de que si el precio es cero se va a mostrar como gratis */}
  {f.price!==0?<h1 className=' mt-1 text-lg font-extrabold text-black'>${f.precio}</h1>:<h1 className=' text-lg font-bold text-black'>Gratis</h1>}
  </div>
  </div>
  <div className=" mt-28">
  <Link href="/Detail/[id]" as={`/Detail/${f.id}`}>
  <button className="bg-green-500 p-2 rounded-xl hover:bg-green-600">Detalle</button>
  </Link>
  </div>
          </div>
        )):null
        }
    </div>
  )
}
