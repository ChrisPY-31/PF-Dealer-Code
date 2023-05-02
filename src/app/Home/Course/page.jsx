"use client"
import React, { useState } from 'react'
import { DB } from '../db'
import NavBar from '../components/Nav/NavBar'
import { useSelector } from 'react-redux'
const Course = () => {
const filter = useSelector(s=>s.Course)
 return (
   
    <div>
      <NavBar></NavBar>
      <div>
      <h1>ordenamiento </h1>
      
      </div>
      {filter.length?<h2>Resultados encontrados: {filter.length}</h2>:null}
      <div className='flex'>
      <div>
  filtros
      </div>
    <div>
  {filter.map((c,index)=>(
  <div>
    <div>{c.image}</div>
<h1 key={index}>{c.name}</h1>
<h2>{c.subtitle}</h2>
<p>{c.rating}</p>
<h1>{c.price}</h1>
</div>
))
  }
    </div>
    </div>
      </div>
  )
}

export default Course