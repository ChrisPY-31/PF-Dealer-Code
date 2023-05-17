import React from 'react'
import Link from 'next/link'
//aqui se hara el mapeo de las recomendaciones en el /Home 
//trae 4 cursos aleatorios desde props
export default function CardR({recomendaciones}) {
  console.log(recomendaciones);
  return (
    <div className="grid grid-cols-4 gap-4 m-2">
      {/*aqui se mapean los cursos*/}
    {
      
    recomendaciones.length?recomendaciones.map((r,index)=>(
      <div className='flex justify-between border hover:border-neutral-900 items-center bg-slate-400 text-gray-950 rounded-2xl flex-col m-1 p-3'>
        {console.log(r.image)}
<img src={r.image?r.image:r.categoryId.image} className="w-32 h-20 rounded" alt="img"></img>
<h1 key={index} className="font-bold">{r.title}</h1>
<h2>{r.description}</h2>
<p className="font-bold text-xs">{r.instructor}</p>
{r.price!==0?<h1>${r.price}</h1>:<h1>Gratis</h1>}
<Link href={`/Detail/${r.id}`}>
<button className='mt-2 p-2 rounded-xl hover:bg-teal-700 bg-teal-600'>Ver Detalles</button>
</Link>
      </div>
   
     )):null
    }
     </div>
  )
}
