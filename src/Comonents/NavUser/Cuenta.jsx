import React from 'react'

function Cuenta() {
  return (
    <div className=' w-full h-96 flex items-center justify-center flex-col'>
       <div className=' w-full h-96 flex   flex-col'>
        <label className="font-bold"> Nombre</label>
       <div className=' w-5/12   py-2 text-gray-500 text-base  bg-transparent outline-none  focus:border-indigo-600 shadow-sm rounded-lg"'  >
            <span>Alivika tony</span>
        </div>
       </div>
       <div className=' w-full h-96 flex   flex-col'>
        <label className="font-bold">Correo</label>
       <div className=' w-5/12   py-2 text-gray-500 bg-transparent outline-none text-base  focus:border-indigo-600 shadow-sm rounded-lg"'  >
            <span>Alivikatony@gmail.com</span>
        </div>
       </div>
       <div className=' w-full h-96 flex   flex-col'>
        <label className="font-bold" >Contraseña</label>
       <div className=' w-5/12 text-base    py-2 text-gray-500 bg-transparent outline-none  focus:border-indigo-600 shadow-sm rounded-lg"'  >
            <span>***********</span>
        </div>
       </div>
     
    </div>
  )
}

export default Cuenta
