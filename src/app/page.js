"use client"
import Landing from "@/components/Landing/Landing";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCursos } from "@/store/reducer/addPagos/agregarPago";



export default function Home() {
  let dispatch = useDispatch()
  useEffect( () => {
    dispatch(getCursos())
  }  )
  return (
    <div>
      <Landing />
    </div>
  );

}
