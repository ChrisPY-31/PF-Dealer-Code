import React from 'react'
import Link from 'next/link'

export default function CardP({Courses,db}) {
  return (
    <div>
    {
        Courses.length?<Link href="/Detail"><div className='flex items-center hover:bg-slate-700' style={{margin:"15px", border:"1px", borderStyle:"solid", borderColor:"grey"}}>
            <div className="m-5 p-16" style={{ border:"1px", borderStyle:"solid", borderColor:"grey"}}>
              <h1 className="bg-gray-200 p-10 text-amber-400 rounded-full">{db.image}</h1>
              </div>
          <div>
           <h1 className="text-xl">{db.name}</h1>
             <h2>{db.subtitle}</h2>
              <p className='text-xs'>{db.rating}</p>
              <p className=" mt-24 text-lg">{db.price}</p>
          </div>
         </div></Link>:null
  }
  </div>
  )
}
