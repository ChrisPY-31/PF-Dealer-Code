import React from 'react'
import NavBar from '../../../components/Nav/NavBar'
const Page = () => {
  return (
    <div>
  <NavBar></NavBar>
  <div>
    <div>
      <h1 className="m-5 text-2xl">Curso Destacado</h1>
        <div className='flex items-center hover:bg-slate-700' style={{margin:"15px", border:"1px", borderStyle:"solid", borderColor:"grey"}}>
          <div className="m-5 p-16" style={{border:"1px", borderStyle:"solid", borderColor:"grey"}}>
            <h1 className="bg-gray-200 p-10 text-amber-400 rounded-full">UX</h1>
            </div>
        <div>
         <h1 className="text-xl">UX Strategy Fundamentals</h1>
           <h2>Practical principles and simple methods to make sure your app, site or system delivers GREAT UX!</h2>
            <p className='text-xs'>Rating: 4.5 out of 5</p>
            <p className=" mt-24 text-lg">$12.99</p>
            
        </div>
       </div>
    </div>
  <div>
<h1 className='text-2xl m-5'>Mis Cursos</h1>
</div>
<div>
  <h1 className='text-2xl m-5'>Recomendaciones</h1>
</div>
  </div>
</div>
  )
}

export default Page