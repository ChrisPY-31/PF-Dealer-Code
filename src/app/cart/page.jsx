"use client"

import {  getCursos } from '@/store/reducer/addPagos/agregarPago'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carrito from '../../Comonents/carrito/Carrito'
import NavBar from '../Home/components/Nav/NavBar'

function caritoDecompras() {
  let dispach = useDispatch()
    useEffect(() => {
       dispach(getCursos())
    }, [])
  return (
    <div>
      <NavBar/>
     <Carrito/>
    </div>
  )
}

export default caritoDecompras
