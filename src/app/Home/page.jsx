"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./components/Nav/NavBar";
import { useSelector } from "react-redux";
import { getCourses } from "../../store/reducer/course";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { DB } from './db'
import Link from 'next/link'
import CardP from './components/Cards/CardP'
import CardR from './components/Cards/CardR'
import { getCursos } from '@/store/reducer/addPagos/agregarPago'
const Page = () => {
  const [recomendaciones,setRecomendaciones]=useState("")
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getCourses(DB))
   dispatch(getCursos())
   }, []);
=======
import { DB } from "./db";
import Link from "next/link";
import CardP from "./components/Cards/CardP";
import CardR from "./components/Cards/CardR";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,} from "react-toastify";
const Page = () => {
  const [recomendaciones, setRecomendaciones] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(DB));
  }, []);
>>>>>>> 4f17835858f69582786d42c6a6cd93b7c554fdc6
  
  if(typeof document !== 'undefined') {
    // you are safe to use the "document" object here
    console.log(document.location.href);
}
useEffect(() => {
  // you are safe to use the 'document' object here
  document.title = 'Sling Academy';
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
<<<<<<< HEAD
  const Courses=useSelector(s=>s.course.courses)
  const cursos=useSelector(s=>s.getCursos.cursos)
  console.log(cursos)
const numeroAleatorio = Math.floor(Math.random() * Courses.length);
if(!recomendaciones){
  Recomendaciones()
}
var db=Courses[numeroAleatorio]
 
=======
  const Courses = useSelector((s) => s.course.courses);
  const numeroAleatorio = Math.floor(Math.random() * Courses.length);
  if (!recomendaciones) {
    Recomendaciones();
  }
  var db = Courses[numeroAleatorio];

>>>>>>> 4f17835858f69582786d42c6a6cd93b7c554fdc6
  return (
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
<<<<<<< HEAD
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
  {cursos.length ?  <CardR cursos = {cursos}></CardR> : "No hay cursos"}
  </div>
</div>
  </div>
</div>
  )
}
=======
  );
};
>>>>>>> 4f17835858f69582786d42c6a6cd93b7c554fdc6

export default Page;
