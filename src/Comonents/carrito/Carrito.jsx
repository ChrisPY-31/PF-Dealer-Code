import React from 'react'
import Productos from './Productos'
import DetallesCompra from './DetallesCompra'
function carrito() {
  return (
    <div>
     <Productos/>
    <div className='flex justify-center'>
    <DetallesCompra/>
    </div>
    </div>
  )
}

export default carrito