"use client"
import { useState } from "react"
import {RxMagnifyingGlass} from "react-icons/rx"
import { useDispatch } from "react-redux"
import {search_Courses} from "../../../../store/reducer/course"
import Link from "next/link"
//aqui se renderiza el input que busca los cursos
export function SearchInput() {
   const dispatch=useDispatch()
   //se crea un estado de tipo string, para que el usuario pueda escribir en el
    const [icourses,setIcourses]=useState("")
    //aqui esta la funcion que al hacer click busca el curso que nosostros escribimos
function search(){
    dispatch(search_Courses(icourses))
}

    
return(
    <div className="flex flex-wrap items-center  ml-5 m-2 rounded-lg bg-[#052345]">
        {/*aqui se renderiza el input */}
<Link href="/Home/Course">
 <button onClick={search} type="submit" className="p-1 ml-2 mr-1 text-lg text-verde top-5 rounded-full"><RxMagnifyingGlass/></button>
 </Link>
    <input  value={icourses} onChange={(e)=>setIcourses(e.target.value)} placeholder='¿Que buscas aprender?' className="p-1 w-80 text-sm outline-none placeholder-gray-400 bg-transparent"></input>
 </div>
)
}
