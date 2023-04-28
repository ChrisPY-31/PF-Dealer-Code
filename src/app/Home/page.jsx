import React from 'react'
import NavBar from '../../../components/Nav/NavBar'
const Page = () => {
  return (
    <div>
  <NavBar></NavBar>
  <div>
    <div>
      <h1 className="m-5">Curso Destacado</h1>
        <div className='flex items-center hover:bg-slate-100' style={{margin:"15px", border:"1px", borderStyle:"solid", borderColor:"grey"}}>
          <div className="m-5 p-28 pl-36 pr-36" style={{border:"1px", borderStyle:"solid", borderColor:"grey"}}>
            <h1>Imagen</h1>
            </div>
        <div>
         <h1>Nombre de curso</h1>
           <h2>Sub titulo</h2>
            <p>Valoracion</p>
            <p className=" mt-24">Precio</p>
            <div><button className="mr-2 mt-5">Comprar</button></div>
        </div>
       </div>
    </div>
  <div>
<h1>Mis Cursos</h1>
</div>
<div>
  <h1>Recomendaciones</h1>
</div>
  </div>
</div>
  )
}

export default Page