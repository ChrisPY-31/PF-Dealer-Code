import {  getCursos } from '@/store/reducer/addPagos/agregarPago'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function caritoDecompras() {
  let dispach = useDispatch()
    useEffect(() => {
       dispach(getCursos())
    }, [])

    let cursosCart = useSelector(state => state.postCart.CursosCard)
    
  return (
    <div>
      { cursosCart ? map(c => (
        <div key={c.id} >
          <h1>c.titulo</h1>
        </div>
      )): <h1>No tienes cursos en tu carrito de compras</h1>}
    </div>
  )
}

export default caritoDecompras
