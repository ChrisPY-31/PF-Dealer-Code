"use client"
import React,{useEffect, useState} from 'react'
import NavBar from '../components/Nav/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories,filters } from '@/store/reducer'
import { categorias } from '../db'

import ItemsPaginate from '../components/Paginate/itemsPaginate'
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { useRouter } from 'next/navigation'
const Course = () => {
  const router = useRouter()
  const dispatch = useDispatch()
const filter = useSelector(s=>s.course.courses)

function onClick(id){
const arr= [...categoria]
var filter= arr.filter(f=>f===id)
if(filter.length===1){
 const filter2= categoria.filter(f=>f!==id)
 console.log(filter2)
 setCategoria(filter2)
return 
}
setCategoria([...categoria,id])
setBoolean(!boolean)
}
function handleFilter(categoria){
dispatch(filters(categoria))
}
  console.log("cateof",categoria)

useEffect(()=>{ 
  dispatch(getCategories(categorias))
  onAuthStateChanged(FirebaseAuth , usuarioFirebase =>{
    if(!usuarioFirebase){
      return router.push('/')
    }
  })
},[]) 
 return (
    <div>
      <NavBar></NavBar>
      {filter.length? <div>
        <div className='flex justify-center'>
<div className='flex w-4/5 mt-5 p-4 rounded-t justify-between bg-teal-600'>
  <div><h1>Ordenamiento</h1>
     </div>
        <div>{filter.length?<h2>Resultados encontrados: {filter.length}</h2>:null}</div>
      </div>
    </div>
      <div className='flex justify-center items-center'>
      <div className='flex p-4 w-4/5 rounded-b bg-teal-700'>
      <div className=' w-1/3 text-center'>
        <h1 className='mb-4'>Categorias</h1>
           {categories.map((c)=>(
            <div className="flex justify-center flex-col" key={c.id}>
            <button className='p-1 border border-emerald-500 hover:bg-emerald-700' onClick={()=>onClick(c.id)}>{c.nombre}</button>
            {c.subCategorias.map((s)=>(
              <div style={!(categoria.find(f=>f===c.id))?{ display:"none" }:{display:"flex"}} className="bg-teal-800 m-1 p-2 rounded">
              <input onClick={()=>{handleFilter(s.n)}} type="checkbox" name={s.n}></input><p className=' pl-2'>{s.n}</p>
              </div>
            ))}
            </div>
               
           ))} 
      </div>
      <ItemsPaginate filter={filter}></ItemsPaginate>
    </div>
   </div>
      
    
  </div>:<div className='text-center m-20'><h1 className='text-3xl'>No hay coincidencias encontradas</h1></div>}
</div>
  )
}

export default Course