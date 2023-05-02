"use client"
import React,{useEffect, useState} from 'react'
import NavBar from './components/Nav/NavBar'
import { useSelector } from 'react-redux'
import { getCourses} from "../../store/reducer/course"
import { useDispatch } from "react-redux";
import { DB } from './db'
import Link from 'next/link'
const Page = () => {
  const dispatch = useDispatch()
useEffect(() => { 
  dispatch(getCourses(DB))
  
   }, []);
   function Recomendaciones(){
    if(Courses.length){
       const push= []
      for (let index = 0; index < 4; index++) {
       push.push(Courses[index]) 
      } 
      setRecomendaciones(push)
    } 
    
   }
  const Courses=useSelector(s=>s.courses.courses)
  const [recomendaciones,setRecomendaciones]=useState(undefined)
const numeroAleatorio = Math.floor(Math.random() * Courses.length);
if(!recomendaciones){
  Recomendaciones()
}
var db=Courses[numeroAleatorio]
 console.log("recomendaciones",recomendaciones)

  return (
    <div>
  <NavBar/>
  <div>
    <div>
      <h1 className="m-5 text-2xl">Curso Destacado</h1>
      {
      Courses.length?<Link href="/Detail"><div className='flex items-center hover:bg-slate-700' style={{margin:"15px", border:"1px", borderStyle:"solid", borderColor:"grey"}}>
          <div className="m-5 p-16" style={{ border:"1px", borderStyle:"solid", borderColor:"grey"}}>
            <h1 className="bg-gray-200 p-10 text-amber-400 rounded-full">{db.image}</h1>
            </div>
        <div>
         <h1 className="text-xl">{db.name}</h1>
           <h2>{db.subtitle}</h2>
            <p className='text-xs'>{db.rating}</p>
            <p className=" mt-24 text-lg">{db.price}</p>
        </div>
       </div></Link>:null
}
    </div>
    <div className='flex'>
  <div className='ml-7 rounded-xl bg-slate-800 '>

<h1 className='text-2xl m-5 '>Mis Cursos</h1>

        <Link href="/Home/Course"><div className="flex items-center p-16 m-5 flex-col hover:bg-slate-700" style={{border:"1px", borderStyle:"solid", borderColor:"grey"}}>
  <h1>Añadir</h1>
    </div></Link>
  </div>
</div>
<div>
  <h1 className='text-2xl m-5'>Recomendaciones</h1>
   <div>
    <div className="flex m-5">
    {
    recomendaciones===undefined?null:recomendaciones.map((r,index)=>(
      <div className='flex justify-between items-center bg-slate-400 text-gray-950 rounded-2xl flex-col m-2 p-3'>
<div>{r.image}</div>
<h1 key={index}>{r.name}</h1>
<h2>{r.subtitle}</h2>
<p>{r.rating}</p>
<h1>{r.price}</h1>
<Link href="/Detail">
<button className='mt-2 p-2 rounded-xl hover:bg-teal-700 bg-teal-600'>Ver Detalles</button>
</Link>
      </div>
   
     ))
    }
     </div>
  </div>
</div>
  </div>
</div>
  )
}

export default Page