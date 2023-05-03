"use client"
import React from 'react'
import NavBar from '../components/Nav/NavBar'
import { useSelector } from 'react-redux'
import CardC from '../components/Cards/CardC'
const Course = () => {
const filter = useSelector(s=>s.course.courses)
 return (
    <div>
      <NavBar></NavBar>
    <div className='m-5'>
      <div className='flex justify-between'>
     <div><h1>ordenamiento </h1></div>
     <div>{filter.length?<h2>Resultados encontrados: {filter.length}</h2>:null}</div>
      </div>
      {filter.length?<div className='flex m-5 shadow-md shadow-indigo-900'>
      <div className=' w-1/3 text-center'>
        <h1>Categorias</h1>
      </div>
<CardC filter={filter}></CardC>
    </div>: <div><h1>No hay Coincidencias encontradas</h1></div>}
  </div>
</div>
  )
}

export default Course