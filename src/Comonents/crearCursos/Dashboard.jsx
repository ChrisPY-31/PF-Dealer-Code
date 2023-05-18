"use client"
import React from 'react'
import {useState} from "react"
import {FaArrowCircleRight} from "react-icons/fa"
import General from './General'
import MisCursos from './MisCursos'
import Pagos from './Pagos'
import Usuarios from './Usuarios'
export default function Dashboard({whatInfo,setWhatInfo}){
  return (
    <div>    
{ whatInfo.usuarios===false&&whatInfo.general===false&&whatInfo.cursos===false&&whatInfo.pagos===false?<div>
    <h1 className='m-5 text-cyan-700 text-4xl'>Dashboard</h1>
<div className='grid grid-cols-2 gap-4'> 
    <div onClick={() => setWhatInfo({
           general: false,
           usuarios: true,
           cursos:false,
           pagos:false
        }) } className='p-10 pr-48 ml-20 mb-10 hover:bg-slate-600 bg-amber-700 border border-amber-400 text-3xl'><h1>Usuarios</h1>
    <div className='mt-20'><FaArrowCircleRight></FaArrowCircleRight></div></div>
    <div onClick={() => setWhatInfo({
           general: false,
           usuarios: false,
           cursos:true,
           pagos:false
        }) } className='p-10 pr-64 ml-10 mr-20 mb-10 hover:bg-slate-600 bg-red-400 border border-red-600 text-3xl'><h1>Cursos</h1>
    <div className='mt-20'><FaArrowCircleRight></FaArrowCircleRight></div>
    </div>
    <div onClick={() => setWhatInfo({
           general: false,
           usuarios: false,
           cursos:false,
           pagos:true
        }) } className='p-10 pr-48 ml-20 mb-10 hover:bg-slate-600 bg-lime-300 border border-lime-500 text-3xl'><h1>Pagos</h1>
    <div className='mt-20'><FaArrowCircleRight></FaArrowCircleRight></div>
    </div>
    <div onClick={() => setWhatInfo({
           general: true,
           usuarios: false,
           cursos:false,
           pagos:false
        }) } className='p-10 pr-48 ml-10 mr-20 mb-10 hover:bg-slate-600 bg-emerald-800 border border-emerald-500 text-3xl'><h1>General</h1>
    <div className='mt-20'><FaArrowCircleRight></FaArrowCircleRight></div>
    </div>
</div>
</div>:<div>
{whatInfo.general === true ? <General/> : null}
{whatInfo.usuarios === true ? <Usuarios/> : null}
{whatInfo.cursos===true ? <MisCursos/>:null}
{whatInfo.pagos===true ? <Pagos/>:null}
</div>}</div>
  )
}
