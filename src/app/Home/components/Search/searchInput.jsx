"use client"
import { useState } from "react"
import {RxMagnifyingGlass} from "react-icons/rx"
import Link from "next/link"
import { useDispatch } from "react-redux"
import {search_Courses} from "../../../../store/reducer/course"
export function SearchInput() {
   const dispatch=useDispatch()
    const [icourses,setIcourses]=useState("")
function search(){
    dispatch(search_Courses(icourses))
}
return(
    <div className="flex flex-wrap items-center  ml-5 m-2 rounded-lg bg-[#052345]">
 {<Link href="/Home/Course">   
    <button onClick={search} className="p-1 ml-2 mr-1 text-lg text-verde top-5 rounded-full"><RxMagnifyingGlass/></button>
    </Link>}
    <input value={icourses} onChange={(e)=>setIcourses(e.target.value)} placeholder='¿Que buscas aprender?' type="text" className="p-1 w-80 text-sm outline-none placeholder-gray-400 bg-transparent"></input>
 </div>
)
}
