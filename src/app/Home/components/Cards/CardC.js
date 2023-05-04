import React from 'react'
import Link from 'next/link'

export default function CardC({filter}) {
  return (
    <div>
    {filter.map((c,index)=>(
    <div id="container" className='flex m-2 p-3 rounded-xl bg-slate-400'>
      <div className='p-10'>{c.image}</div>
      <div>
  <h1 key={index}>{c.name}</h1>
  <h2>{c.subtitle}</h2>
  <p>{c.rating}</p>
  
  <div className="flex justify-between"><h1>{c.price}</h1>
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
