"use client"
import React, { useState } from 'react'
import { DB } from '../db'
import NavBar from '../components/Nav/NavBar'
const Course = () => {
  const [Allcourses,setCourse]= useState([...DB])
  const [filter,setFilter]=useState([])

  return (
    <div>
      <NavBar Allcourses={Allcourses} setFilter={setFilter}></NavBar>
      <div>
      <h1>ordenamiento </h1>
      
      </div>
      {filter.length?<h2>Resultados encontrados: {filter.length}</h2>:null}
      <div className='flex'>
      <div>
  filtros
      </div>
    <div>
  {filter.length?filter.map((c,index)=>(
  <div>
    <div>{c.image}</div>
<h1 key={index}>{c.name}</h1>
<h2>{c.subtitle}</h2>
<p>{c.rating}</p>
<h1>{c.price}</h1>
</div>
)):Allcourses.map((c,index)=>(
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