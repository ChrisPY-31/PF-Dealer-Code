"use client"
import React,{useEffect, useState} from 'react'
import NavBar from '../components/Nav/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories,filters ,Order,Order2, reset, getCourses, search_Courses} from '@/store/reducer'
import { categorias, DB } from '../db'
import ItemsPaginate from '../components/Paginate/itemsPaginate'
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { useRouter } from 'next/navigation'
//aqui va estar la ruta /Course
const Course = () => {
//aqui al levantar la aplicacion se cargaran todos lo paises
  const router = useRouter()
  const dispatch = useDispatch()
  //aqui se llaman dos array el de cursos y el de categorias
const filter = useSelector(s=>s.course.courses)
const categories= useSelector(c=>c.course.myCategories)
const [boolean,setBoolean]=useState(false)
let [addCategories,setCategories]=useState([])
function handleReset(){
    dispatch(getCourses(DB))  
}
function handleOrder(e){
  const {name,value} =e.target
if(name==="Order"){
dispatch(Order(value))
}
else if(name==="Order2"){
  
  dispatch(Order2(value))
}
}
useEffect(()=>{ 
  dispatch(getCategories(categorias))
  onAuthStateChanged(FirebaseAuth , usuarioFirebase =>{
    if(!usuarioFirebase){
      return router.push('/')
    }
  })
},[]) 
function onClick(){
setBoolean(!boolean)
}
function searchCategories(e){
  const {value,checked}=e.target
  if(checked){
  setCategories([...addCategories,parseInt(value)])
}else{
   const arr=[...addCategories]
   const filter = arr.filter((v)=>v!==parseInt(value))
   setCategories(filter)
}

}
 console.log(addCategories)
 return (
    <div>
      <NavBar></NavBar>
      {filter.length? <div>
        <div className='flex justify-center'>
<div className='flex w-4/5 mt-5 p-4 rounded-t justify-between items-center bg-teal-600'>
  <div className='flex items-center'><h1>Ordenar por</h1>
  <select className='ml-2 p-2 border border-emerald-500 hover:bg-emerald-600 bg-teal-700' defaultValue="DEFAULT" name='Order' onChange={handleOrder}>
  <option value="DEFAULT" disabled>Selecciona tu orden</option>
  <option value="Recomendados">Recomendados</option>
  <option value="Populares">Populares</option>
  </select>
  <select className='ml-2 p-2 border border-emerald-500 hover:bg-emerald-600 bg-teal-700' defaultValue="DEFAULT" name='Order2' onChange={handleOrder}>
    <option value="DEFAULT" disabled>Selecciona lo que buscas</option>
<option value="MayorPrecio">Mayor Precio</option>
<option value="MenorPrecio">Menor Precio</option>
<option value="Gratis">Gratis</option>
  </select>
     </div>
        <div>{filter.length?<h2>Resultados encontrados: {filter.length}</h2>:null}</div>
      </div>
    </div>
      <div className='flex justify-center items-center'>
      <div className='flex p-4 w-4/5 rounded-b bg-teal-700'>
      <div className=' w-1/3 text-center'>
        <button className='mb-4 p-1 pl-5 pr-4 border border-emerald-500 hover:bg-emerald-700' onClick={onClick}>Categorias</button>
           {categories.map((c)=>(
            <div className="flex justify-center flex-col" key={c.id}>
            <div style={boolean?{display:'flex'}:{display:"none"}} className='flex m-1 p-2 bg-teal-800 border border-transparent hover:border-black rounded'>
            <input type="checkbox" name='Categorias' onChange={searchCategories} value={c.id}></input><p className='ml-2'>{c.nombre}</p>
            </div>
            </div>
           ))} 
      </div> 
      <ItemsPaginate filter={filter}></ItemsPaginate>
    </div>
   </div>
  </div>:handleReset()}
</div>
  )
}

export default Course