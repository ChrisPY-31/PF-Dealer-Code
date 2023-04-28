import React from 'react'

function Pagos() {
  return (
    <div className='w-full h-96 flex ml-10  flex-col'> 
     <div >
      <h1 className='text-xl ml-12 font-bold'>Tu historial de pagos</h1>
     </div>
     <div className='w-full flex gap-24 text-black font-bold text-sm rounded-lg ml-6 h-20 items-center mt-5 bg-gray-600 p-10'>
       <div className='m-0'>
       <img src="https://codigofacilito.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBWdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--322f42f76dae04902e8aeedd7ea41f0e48ef8566/html5.png" 
        className='w-16 h-16' alt="Imagen" />
       </div>
       <div className='block' >
      <p className='text-gray-300 m-0 text-base'>Precio</p>
     <span>$11.00</span>
       </div>
       <div>
       <p className='text-gray-300 m-0 text-base'>Targeta</p>
       <span>2618******</span>
       </div>      
     </div>
    </div>
  )
}

export default Pagos