"use client"
import React,{useEffect} from 'react'
import NavBar from './components/Nav/NavBar'
import { DB } from './db'
import {TiPlus} from "react-icons/ti"
import { useDispatch, useSelector } from 'react-redux'
import {get_Courses} from "../redux/accions/accions"
const Page = () => {
const dispatch= useDispatch()
useEffect(() => { 
  dispatch(get_Courses())  
  
   }, []);
  const Courses=useSelector(s=>s.Courses)
const numeroAleatorio = Math.floor(Math.random() * 11);
let db=Courses[numeroAleatorio]

 
  return (
    <div>
  <NavBar/>
  <div>
    <div>
      <h1 className="m-5 text-2xl">Curso Destacado</h1>
        <div className='flex items-center hover:bg-slate-700' style={{margin:"15px", border:"1px", borderStyle:"solid", borderColor:"grey"}}>
          <div className="m-5 p-16" style={{ border:"1px", borderStyle:"solid", borderColor:"grey"}}>
            <h1 className="bg-gray-200 p-10 text-amber-400 rounded-full">{db.image}</h1>
            </div>
        <div>
         <h1 className="text-xl">{db.name}</h1>
           <h2>{db.subtitle}</h2>
            <p className='text-xs'>{db.rating}</p>
            <p className=" mt-24 text-lg">{db.price}</p>
        </div>
       </div>
    </div>
  <div>
<h1 className='text-2xl m-5'>Mis Cursos</h1>
<div>
  <h1>No tienes cursos por ahora</h1>
 <div>
  <h1><TiPlus/></h1>
 </div>
</div>
</div>
<div>
  <h1 className='text-2xl m-5'>Recomendaciones</h1>
</div>
  </div>
</div>
  )
}

export default Page