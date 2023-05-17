"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./components/Nav/NavBar";
import { getCursos } from "@/store/reducer/addPagos/agregarPago";
import { useDispatch , useSelector } from "react-redux";
import Link from 'next/link'
import CardP from './components/Cards/CardP'
import CardR from './components/Cards/CardR'
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
const Page = () => {
  const [recomendaciones,setRecomendaciones]=useState("")
  const {Name} = useSelector(state => state.cursoId)
  console.log(Name)
  const dispatch = useDispatch()

  const Courses=useSelector(state=>state.getCursos.cursos)
  console.log("home",Courses)
  if(typeof document !== 'undefined') {
    // you are safe to use the "document" object here
    console.log(document.location.href);
}
useEffect(() => {
  dispatch(getCursos())
  onAuthStateChanged(FirebaseAuth , usuarioFirebase =>{
    if(!usuarioFirebase){
      return router.push('/')
    }
  })
  // you are safe to use the 'document' object here
  document.title = 'Dealer Code';
}, []);
  function Recomendaciones() {
    var push = [];
    if (Courses.length > 3) {
      for (let index = 0; index < 4; index++) {
        let numeroA = Math.floor(Math.random() * Courses.length);
        if (Courses[numeroA] !== undefined) {
          push.push(Courses[numeroA]);
          setRecomendaciones(push);
        }
      }
    }
  }


const numeroAleatorio = Math.floor(Math.random() * Courses.length);
if(!recomendaciones){
  Recomendaciones()
}
var db=Courses[numeroAleatorio]
 

  return (
    <div>
      <div>
      <ToastContainer />
      <NavBar />
      <div>
        <div>
          <h1 className="mt-5 ml-5 text-2xl">Curso Destacado</h1>
          <CardP Courses={Courses} db={db}></CardP>
        </div>
        <div className="flex">
          <div className="ml-7 rounded-xl bg-slate-800 ">
            <h1 className="text-2xl m-5 ">Mis Cursos</h1>
            <Link href="/Home/Course">
              <div
                className="flex items-center p-16 m-5 flex-col hover:bg-slate-700"
                style={{
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: "grey",
                }}
              >
                <h1>Añadir</h1>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-2xl m-5">Recomendaciones</h1>
          <div>
            <CardR recomendaciones={recomendaciones}></CardR>
          </div>
        </div>
      </div>
    </div>
    </div>
 
  )
}


export default Page;
