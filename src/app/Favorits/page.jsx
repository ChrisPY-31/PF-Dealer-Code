import React from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../Home/components/Nav/NavBar';

 const Favorits = () => {

  return (
    <>
    <NavBar/>
    {/* {curso.map((curso)=>(
           <div id="container" className='flex m-2 p-3 rounded-xl bg-slate-400'>
           <div className='flex items-center p-10 pl-16 pr-16'>{curso.image}</div>
           <div>
       <h1 key={index}>{curso.name}</h1>
       <h2>{curso.subtitle}</h2>
       <p>{curso.rating}</p>
       <div className="flex justify-between"><h1>{curso.price}</h1>
       <Link href="/Detail">
       <button className="bg-green-500 p-2 rounded-xl hover:bg-green-600">Ir al Curso</button>
       </Link>
       </div>
       </div>
       </div>
       
    ))} */}
    </>
  )
}
export default Favorits;