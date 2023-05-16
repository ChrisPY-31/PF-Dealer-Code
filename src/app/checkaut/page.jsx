"use client"
import Formularios from '@/Comonents/PasarelaDePago/Formularios'
import Nav from '@/Comonents/PasarelaDePago/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { getCursosId } from '@/store/reducer/addPagos/agregarPago'
import { useEffect } from 'react'

const Page = () => {

  return (
    <div className=''>
      <Nav/>
    <Formularios  />
    </div>
  )
}

export default Page