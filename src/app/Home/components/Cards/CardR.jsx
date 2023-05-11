import React from 'react'
import Link from 'next/link'
export default function CardR({cursos}) {
  return (
    <div className="flex m-5">
    {
    cursos.length? cursos.map((r,index)=>(
      <div className='flex justify-between border hover:border-neutral-900 items-center bg-slate-400 text-gray-950 rounded-2xl flex-col m-2 p-3'>
<div>Imagen</div>
<h1 key={index}>{r.titulo}</h1>
{r.price!==0?<h1>{r.price}</h1>:<h1>Gratis</h1>}
<Link href={`/Detail/${r.id}`}>
<button className='mt-2 p-2 rounded-xl hover:bg-teal-700 bg-teal-600'>Ver Detalles</button>
</Link>
      </div>
   
     )):null
    }
     </div>
  )
}
