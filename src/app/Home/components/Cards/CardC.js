import React from 'react'
import Link from 'next/link'

export default function CardC({filter}) {
  console.log(filter)
  return (
    <div>
    {filter.map((c,index)=>(
    <div id="container" className='flex m-2 p-3 rounded-xl bg-slate-400'>
      <div className='flex items-center p-10 pl-16 pr-16'>{c.image}</div>
      <div>
  <h1 key={index}>{c.name}</h1>
  <h2>{c.subtitle}</h2>
  <p className='text-xs text-orange-300'>Estrellas: {c.rating}</p>
  <p className='text-xs'>Estudiantes: {c.students}</p>
  
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
