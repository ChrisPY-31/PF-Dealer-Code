import React from 'react'
import Link from 'next/link'
//esta es una funcion card donde se van a mapear las cards de la ruta Explorar Cursos o /Home/Course
//se traen en props el filtro del paginado por ahora
export default function CardC({filter}) {
  return (
    <div>
{/*aqui se mapean todas las cards*/}
    {filter.map((c,index)=>(
    <div id="container" className='flex m-2 p-3 rounded-xl bg-slate-400'>
      <div className='flex items-center p-10 pl-16 pr-16'>{c.image}</div>
      <div>
  <h1 key={index}>{c.name}</h1>
  <h2>{c.subtitle}</h2>
  <p className='text-xs text-orange-300'>Estrellas: {c.rating}</p>
  <p className='text-xs'>Estudiantes: {c.students}</p>
{/*aqui se esta la logica de que si el precio es cero se va a mostrar como gratis */}
  <div className="flex justify-between ">{c.price!==0?<h1 className=' text-lg font-bold text-black'>${c.price}</h1>:<h1 className=' text-lg font-bold text-black'>Gratis</h1>}
  <Link href="/Detail">
  <button className="bg-green-500 p-2 rounded-xl hover:bg-green-600">Detalle</button>
  </Link>
  </div>
  </div>
  </div>
  ))
    }
       </div>
  )
}
