import React from 'react'
import Link from 'next/link'
//esta es una funcion card donde se van a mapear las cards de la ruta Explorar Cursos o /Home/Course
//se traen en props el filtro del paginado por ahora
export default function CardC({filter}) {
console.log(filter)
  return (
    <div>
{/*aqui se mapean todas las cards*/}
    {filter.length?filter.map((c,index)=>(
    <div id="container" className='flex items-start h-44 m-2 mr-0 p-2 rounded-xl bg-slate-400 justify-between'>
      <div className='flex'>
      <div className='flex items-center p-10 pl-16 pr-16'>{c.image}</div>
      <div className='flex flex-col'>
  <h1 className="font-bold text-gray-950" key={index}>{c.title}</h1>
  <h2 className='mt-2 h-11'>{c.description}</h2>
  <p className='mt-2 text-xs font-bold  text-gray-950'>instructor: {c.instructor}</p>
{/*aqui se esta la logica de que si el precio es cero se va a mostrar como gratis */}
  {c.price!==0?<h1 className=' mt-1 text-lg font-extrabold text-black'>${c.price}</h1>:<h1 className=' text-lg font-bold text-black'>Gratis</h1>}
  </div>
  </div>
  <div className=" mt-28">
  <Link href="/Detail/[id]" as={`/Detail/${c.id}`}>
  <button className="bg-green-500 p-2 rounded-xl hover:bg-green-600">Detalle</button>
  </Link>
  </div>
  </div>
  )):null
    } 
    
       </div>
  )
}
