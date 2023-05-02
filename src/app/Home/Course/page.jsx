"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavBar from '../components/Nav/NavBar'
import { useSelector } from 'react-redux'
const Course = () => {
const filter = useSelector(s=>s.courses.courses)
 return (
    <div>
      <NavBar></NavBar>
    <div className='m-5'>
      <div className='flex justify-between'>
     <div><h1>ordenamiento </h1></div>
     <div>{filter.length?<h2>Resultados encontrados: {filter.length}</h2>:null}</div>
      </div>
     
      <div className='flex m-5 shadow-md shadow-indigo-900'>
      <div className=' w-1/3 text-center'>
        <h1>Categorias</h1>
      </div>
    <div>
  {filter.map((c,index)=>(
  <div className='flex m-2 p-3 rounded-xl bg-slate-400'>
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
    </div>
  </div>
</div>
  )
}

export default Course