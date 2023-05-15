import React from 'react'
import Link from 'next/link'
//aqui es donde se va a mapear la card de Pre vista de la rota /Home
//se traen por props un curso random y el array del selector(c=>c.courses)(Courses)
export default function CardP({Courses,db}) {
  return ( 
    <div className='flex justify-center'>
      {/*aqui es donde se mapea la card*/}
    {
     
        Courses.length?<Link href="/Detail"><div className='flex items-center hover:bg-slate-700 w-3/3 m-5' style={{border:"1px", borderStyle:"solid", borderColor:"grey"}}>
            <div className="m-5 p-16" style={{ border:"1px", borderStyle:"solid", borderColor:"grey"}}>
              <h1 className="bg-gray-200 p-10 text-amber-400 rounded-full">{db.image}</h1>
              </div>
          <div className='m-5'>
           <h1 className=" text-3xl">{db.name}</h1>
             <h2>{db.subtitle}</h2>
              <p className='text-xs'>Estrellas: {db.rating}</p>
              {/*aqui se esta la logica de que si el precio es cero se va a mostrar como gratis */}
              {db.price!==0?<p className=" mt-24 text-lg">${db.price}</p>:<p className=" mt-24 text-lg">Gratis</p>}
          </div>
         </div></Link>:null
  }
  </div>
  )
}
