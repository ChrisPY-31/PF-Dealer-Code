"use client"
import Landing from "@/components/Landing/Landing";
<<<<<<< HEAD

=======
>>>>>>> d6c440b7b307e27deee4e4c3bca93b975f57f491
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
