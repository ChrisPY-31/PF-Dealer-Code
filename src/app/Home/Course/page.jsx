"use client"
import React,{use, useEffect, useState} from 'react'
import NavBar from '../components/Nav/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories,filters ,Order,Order2} from '@/store/reducer'
import { categorias } from '../db'
import ItemsPaginate from '../components/Paginate/itemsPaginate'
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { useRouter } from 'next/navigation'
const Course = () => {
  const router = useRouter()
  const dispatch = useDispatch()
const filter = useSelector(s=>s.course.courses)
const categories= useSelector(c=>c.course.myCategories)
const [categoria,setCategoria]=useState([])
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

}
function handleFilter(e){
const {value,checked}=e.target
const obj={
  value,
  checked
}
console.log("obj",obj)
dispatch(filters(obj))
}

  console.log("cateof",categoria)
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
let [initPage,setinitPage] = useState(0)
let [pageSize,setPagesize]= useState(filter.length/5)
let startIndex = initPage * pageSize;
let endIndex = startIndex + pageSize;
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
        <h1 className='mb-4'>Categorias</h1>
           {categories.map((c)=>(
            <div className="flex justify-center flex-col" key={c.id}>
            <button className='p-1 border border-emerald-500 hover:bg-emerald-700' onClick={()=>onClick(c.id)}>{c.nombre}</button>
            {c.subCategorias.map((s)=>(
              <div style={!(categoria.find(f=>f===c.id))?{ display:"none" }:{display:"flex"}} className="bg-teal-800 border border-transparent hover:border-black m-1 p-2 rounded">
              <input onChange={(e)=>{handleFilter(e)}} type="checkbox" value={s.n} id={s.n} name="categorias"></input><label className='pl-2' htmlFor={s.n}>{s.n}</label>
              </div>
            ))}
            </div>
               
           ))} 
      </div> 
      <ItemsPaginate initPage={initPage} setinitPage={setinitPage} pageSize={pageSize} startIndex={startIndex} endIndex={endIndex} filter={filter}></ItemsPaginate>
    </div>
   </div>
      
    
  </div>:<div className='text-center m-20'><h1 className='text-3xl'>No hay coincidencias encontradas</h1></div>}
</div>
  )
}

export default Course