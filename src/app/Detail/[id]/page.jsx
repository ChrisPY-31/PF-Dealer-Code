"use client";
import InfoCouse from "@/components/InfoCourse/InfoCouse";
import NavBar from "../../Home/components/Nav/NavBar";
import CardCourse from "@/components/CardCourse/CardCourse";
import Addressed from "@/components/Addressed/Addressed";
import Learning from "@/components/Learning/Learning";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getCursosId} from "../../../store/reducer/addPagos/agregarPago"

const Page = ({params}) => {
    let {id} = params
     let dispatch = useDispatch()
     useEffect(() => {
      dispatch(getCursosId(id))
     },[])
     let cursoId = useSelector(state => state.cursoId.Detail)
     console.log(cursoId);
  return (
    <div className="min-h-screen">
      <NavBar />
      <section className="w-3/4 m-auto ">
        <div className="w-full flex mt-16 gap-10 ">
          <div className="w-2/3">
            <InfoCouse />
          </div>
          <div className="w-4/12">
          { cursoId !==  null ?   <CardCourse 
            precio = {cursoId.price  }
            categoria={cursoId.categoria}
            titulo={cursoId.titulo}
            instructor={cursoId.instructor}
            descripcion={cursoId.descripcion}
            id = {cursoId.id}
            /> : <h2>Loadin...</h2> }
          </div>
        </div>
        <Addressed />
        <Learning/>
      </section>
    </div>
  );
};

export default Page;