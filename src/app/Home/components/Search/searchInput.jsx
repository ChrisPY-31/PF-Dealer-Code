"use client"
import { useState } from "react"
import {RxMagnifyingGlass} from "react-icons/rx"
import Link from "next/link"
import { useDispatch } from "react-redux"
import {search_Courses} from "../../../redux/accions/accions"
export function SearchInput() {
   const dispatch=useDispatch
    const [icourses,setIcourses]=useState("")
function search(){
    dispatch(search_Courses(icourses))
}
return(
 <div className="flex flex-wrap items-center p-2 ml-5 m-2 rounded-xl bg-tarawera-500"> 
 {<Link href="/Home/Course">   
    {icourses.length?<button onClick={search} className="p-1 mr-2 top-5 text-gray-950 rounded-full"><RxMagnifyingGlass/></button>:null}
    </Link>}
    <input value={icourses} onChange={(e)=>setIcourses(e.target.value)} placeholder='¿Que buscas aprender?' type="text" className="p-1 placeholder-black bg-transparent"></input>
    
 </div>
)
}