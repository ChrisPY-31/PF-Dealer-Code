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
      <h1 className='mt-5 ml-5 font-bold text-3xl'>Mis Favoritos</h1>
      <div>

        {Fav.length?Fav.map((f,index)=>(
          
          <div className='flex justify-between items-end m-5 p-3 bg-transparent border border-tarawera-600 hover:bg-tarawera-900'>   
            <div className='flex'>           
                <div className='border border-tarawera-600'><button className='p-1 rounded border hover:bg-red-800 border-red-950' onClick={()=>removeItem(f.id)}>❌</button><img src={f.image} className="w-20 h-20 ml-8 mr-8 mb-8" alt="img"></img></div>
      <Link href="/Introduccion"><div className='ml-10' >
  <h1 className="font-bold text-gray-950" key={index}>{f.title}</h1>
  <h2 >{f.description}</h2>
  <p className='mt-2 text-xs font-bold  text-gray-950'>instructor: {f.instructor}</p>
{/*aqui se esta la logica de que si el precio es cero se va a mostrar como gratis */}
  {f.price!==0?<h1 className=' mt-1 text-lg font-extrabold text-black'>${f.price}</h1>:<h1 className=' text-lg font-bold text-black'>Gratis</h1>}
  </div></Link>
  </div>
  
  <div>
 
  </div>
   <Link href="/Detail/[id]" as={`/Detail/${f.id}`}>
  <button className="border border-green-400 bg-green-600 p-2 mt-3 rounded-xl hover:text-green-200 hover:bg-green-950">Detalle</button>
  </Link>
          </div>
        )):<div>
<h1 className='mt-5 ml-5 font-bold text-3xl text-center'>Aun no has agregado cursos</h1>
<div className='flex items-center justify-center mt-10'>

</div>
        </div>
        }
        <div className='flex items-center justify-center mt-5'>
  <Link href="/Course">
<button className="border border-green-400 bg-green-950 hover:text-green-800 p-2 mt-3 rounded-xl hover:bg-green-600">Explorar cursos</button>
 </Link>
  </div>
        </div>
    </div>
  )
}
