"use client"
import React,{useEffect, useState} from 'react'
import NavBar from '../components/Nav/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import {Order2} from '@/store/reducer/cursos'
import {getCategories} from "../../../store/reducer/thunk"
import ItemsPaginate from '../components/Paginate/itemsPaginate'
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { useRouter } from 'next/navigation'
import { getCursos } from '@/store/reducer/addPagos/agregarPago'
import { Filter } from '../../../store/reducer/thunk'
//aqui va estar la ruta /Course
const Course = () => {
  const router = useRouter()
  const dispatch = useDispatch()
   useEffect(()=>{ 
  dispatch(getCategories())
  onAuthStateChanged(FirebaseAuth , usuarioFirebase =>{
    if(!usuarioFirebase){
      return router.push('/')
    }
  })
},[])  
//aqui al levantar la aplicacion se cargaran todos lo paises
 function handleReset(){
   dispatch(getCursos())
  }
  //aqui se llaman dos array el de cursos y el de categorias
const cursos = useSelector(state=>state.getCursos.cursos)
const filter= useSelector(state=>state.filter.filter)
const filt= filter.length?filter:cursos
const categories= useSelector(c=>c.categorias.categorias)
const [boolean,setBoolean]=useState(false)
let [addCategories,setCategories]=useState([])
function handleOrder(e){
  const {name,value} =e.target
 if(name==="Order2"){
    dispatch(Order2(value))
}
}

function onClick(){
setBoolean(!boolean)
}
function searchCategories(e){
  const {value,checked}=e.target
  if(checked){
  addCategories.push(parseInt(value) )
  dispatch(Filter(addCategories)) 
}else{
   const arr=[...addCategories]
   const filt = arr.filter((v)=>v!==parseInt(value))
   setCategories(filt)
   dispatch(Filter(filt)) 
}

 
}
 return (
    <div>
      <NavBar></NavBar>
      {filt.length? <div>
        <div className='flex justify-center'>
<div className='flex w-4/5 mt-5 p-4 rounded-t justify-between items-center bg-teal-600'>
  <div className='flex items-center'><h1>Ordenar por</h1>
  <select className='ml-2 p-2 border border-emerald-500 hover:bg-emerald-600 bg-teal-700' defaultValue="DEFAULT" name='Order2' onChange={handleOrder}>
    <option value="DEFAULT" disabled>Selecciona lo que buscas</option>
<option value="MayorPrecio">Mayor Precio</option>
<option value="MenorPrecio">Menor Precio</option>
<option value="Gratis">Gratis</option>
  </select>
     </div>
        <div>{filt.length?<h2>Resultados encontrados: {filt.length}</h2>:null}</div>
      </div>
    </div>
      <div className='flex justify-center items-center'>
      <div className='flex p-4 w-4/5 rounded-b bg-teal-700'>
      <div className=' w-1/3 text-center'>
        <button className='mb-4 p-1 pl-5 pr-4 border border-emerald-500 hover:bg-emerald-700' onClick={onClick}>Categorias</button>
           {categories?categories.map((c)=>(
            <div className="flex justify-center flex-col" key={c.id}>
            <div style={boolean?{display:'flex'}:{display:"none"}} className='flex m-1 p-2 bg-teal-800 border border-transparent hover:border-black rounded'>
            <input type="checkbox" name='Categorias' onChange={searchCategories} value={c.id}></input><p className='ml-2'>{c.title}</p>
            </div>
            </div>
           )):null} 
      </div> 
      <ItemsPaginate filter={filt}></ItemsPaginate>
    </div>
   </div>
  </div>:handleReset()}
</div>
  )
}

export default Course