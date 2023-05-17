"use client";
import InfoCouse from "@/components/InfoCourse/InfoCouse";
import NavBar from "../../Home/components/Nav/NavBar";
import CardCourse from "@/components/CardCourse/CardCourse";
import Addressed from "@/components/Addressed/Addressed";
import Learning from "@/components/Learning/Learning";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCursoId } from "@/store/reducer";


const Page = ({params}) => {
    let {id} = params
     let dispatch = useDispatch()
     useEffect(() => {
      dispatch(getCursoId(id))
     },[])
     let {Detail} = useSelector(state => state.cursoId)
     console.log(Detail)
     const { title , description , instructor , price ,thumbnail , image} = Detail
  return (
    <div className="min-h-screen">
      <NavBar />
      <section className="w-3/4 m-auto ">
        <div className="w-full flex mt-16 gap-10 ">
          <div className="w-2/3">
            <InfoCouse 
            title={title}  
            description={description}  
            instructor={instructor}/>
          </div>
          <div className="w-4/12">

          { Detail !==  null ?<CardCourse 
          id={id} 
          title={title}
          price={price}
          //image={image}
          description={description}
          instructor={instructor}
          thumbnail={thumbnail}
          image={image}
          />:<h2>Loadin...</h2> }

          </div>
        </div>
        <Addressed />
        <Learning/>
      </section>
    </div>
  );
};

export default Page;