"use client"
import Formularios from '@/Comonents/PasarelaDePago/Formularios'
import Nav from '@/Comonents/PasarelaDePago/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { getCursosId } from '@/store/reducer/addPagos/agregarPago'
import { useEffect } from 'react'

const Page = ({params}) => {
  let {id} = params
   let dispatch = useDispatch()
   useEffect(() => {
    dispatch(getCursosId(id))
   }, [])
  let CursoDetail = useSelector(state => state.cursoId.Detail)
  return (
    <div className=''>
      <Nav/>
      {CursoDetail ? <Formularios 
      titulo = {CursoDetail.titulo}
      monto = {CursoDetail.price}
      idCurso = {CursoDetail.id}
      rating = {CursoDetail.rating}
      />: <h1> Loading...</h1>}
    </div>
  )
}

export default Page