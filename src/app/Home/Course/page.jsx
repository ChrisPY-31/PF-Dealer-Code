"use client"
import React from 'react'
import NavBar from '../components/Nav/NavBar'
import { useSelector } from 'react-redux'
import ItemsPaginate from '../components/Paginate/itemsPaginate'
const Course = () => {
const filter = useSelector(s=>s.course.courses)
 return (
    <div>
      <NavBar></NavBar>
       <div>
         <div className='flex m-10 justify-between'>
     <div><h1>ordenamiento</h1>
     </div>
     <div>{filter.length?<h2>Resultados encontrados: {filter.length}</h2>:null}</div>
      </div>
      <div className='flex justify-center items-center'>
      {filter.length?<div className='flex p-4 shadow-md shadow-indigo-900 w-4/5'>
      <div className=' w-1/3 text-center'>
        <h1>Categorias</h1>
      </div>
      <ItemsPaginate filter={filter}></ItemsPaginate>
    </div>: <div><h1 className='text-3xl'>No hay coincidencias encontradas</h1></div>}
   </div>
      
    
  </div>
</div>
  )
}

export default Course