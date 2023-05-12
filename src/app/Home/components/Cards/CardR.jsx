import React from 'react'
import Link from 'next/link'
//aqui se hara el mapeo de las recomendaciones en el /Home 
//trae 4 cursos aleatorios desde props
export default function CardR({recomendaciones}) {
  return (
    <div className="flex m-5">
      {/*aqui se mapean los cursos*/}
    {
      
    recomendaciones.length?recomendaciones.map((r,index)=>(
      <div className='flex justify-between border hover:border-neutral-900 items-center bg-slate-400 text-gray-950 rounded-2xl flex-col m-2 p-3'>
<div>{r.image}</div>
<h1 key={index}>{r.name}</h1>
<h2>{r.subtitle}</h2>
<p>{r.rating}</p>
{/*aqui se esta la logica de que si el precio es cero se va a mostrar como gratis */}
{r.price!==0?<h1>${r.price}</h1>:<h1>Gratis</h1>}
<Link href="/Detail">
<button className='mt-2 p-2 rounded-xl hover:bg-teal-700 bg-teal-600'>Ver Detalles</button>
</Link>
      </div>
   
     )):null
    }
     </div>
  )
}
