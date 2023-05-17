"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { FirebaseAuth } from "@/firebase/credenciales";
import { onAuthStateChanged } from "firebase/auth";
import { UseLocalStorage } from "@/Comonents/carrito/useLocalStorage";
import { useRouter } from "next/navigation";

const CardCourse = ({ image,id,instructor,description, price, thumbnail, title }) => {
  let router = useRouter();
  let [boolean,setBoolean]= useState(false)
  const [autentication, setAutentication] = useState(false);
  let token;
  onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      token = usuarioFirebase.accessToken;
      setAutentication(true);
    }
  });
let [favoritos, setFavoritos] = UseLocalStorage("Fav", [])
  let [producto, setProducto] = UseLocalStorage("producto", [])
function addFavorite(id){
const filter= favoritos.find((f)=>f.id===id) 
if(!filter){
setFavoritos([...favoritos,{image,title, instructor, price, description, id }])
setBoolean(true)
}else{
 const updatedProducto  = favoritos.filter(item => item.id !== id) 
window.localStorage.setItem("Fav", JSON.stringify(updatedProducto))
setFavoritos(updatedProducto) 
setBoolean(false)
}
}

  

  return (
    <div className="bg-white h-full rounded-md" >
      <div className="">
        <video 
        poster={image} 
        controls  
        className="h-52 w-full"
        >
          <source
            src="https://res.cloudinary.com/dbcko47q4/video/upload/v1684004430/l9rk7m9zrajowyhvxyud.mp4"
            type="video/mp4"
          />
        </video>
        <div className="w-11/12 m-auto text-black mt-6">
          <div className="h-20 flex justify-center flex-col my-5">
            <h4 className="text-2xl font-medium">{title}</h4>
            <p className="my-1">
              <span className="text-lg">{price} MX</span>
            </p>
            <p>{title}</p>
          </div>
          <div>
            <div className="flex flex-col justify-between h-14">
              <div className="flex">
                {autentication ? (
                  <Link
                    href="checkaut/[id]"
                    as={`/checkaut/${id}`}
                    className="w-72 rounded-md text-center bg-teal-600 hover:bg-teal-800 py-2.5 text-white"
                  >
                    {" "}
                    Comprar Curso{" "}
                  </Link>
                ) : (
                  <h1
                    className=" text-white w-full py-2.5 bg-teal-600 hover:bg-teal-800 cursor-pointer rounded-md text-center"
                    onClick={() => router.push("/sing-up")}
                  >
                    Comprar curso
                  </h1>
                )}

                  <div className="flex items-center">
                    {!boolean?<button
                      className="p-2 bg-red-400 ml-4 rounded-md py-2.5"
                      onClick={()=>addFavorite(id)}>
                      🤍
                    </button>:<button
                      className="p-2 bg-red-400 ml-4 rounded-md py-2.5"
                      onClick={()=>addFavorite(id)}>
                        🧡
                    </button>}
                  </div>
              </div>
            </div>
            {autentication ? (
              <button
                onClick={() =>
                  setProducto([
                    ...producto,
                    {
                      title,
                      instructor,
                      price,
                      idP: producto.length,
                      id,
                    },
                  ])
                }
                className="py-2.5 w-full bg-slate-600 rounded-lg text-white"
              >
                Agregar a la Cesta
              </button>
            ):null}
          </div>
          <div>
            <div>
              <div className="flex my-4">
                <img
                  className="w-7 "
                  src="https://cdn-icons-png.flaticon.com/512/2912/2912761.png"
                  alt="certificado imagen"
                />
                <p className="ml-4">Certificado final del curso</p>
              </div>
              <div className="flex my-4">
                <img
                  className="w-7 "
                  src="https://cdn-icons-png.flaticon.com/512/1170/1170696.png"
                  alt="video"
                />
                <p className="ml-4">7 horas del curso</p>
              </div>
              <div className="flex my-4">
                <img
                  className="w-7 "
                  src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
                  alt="descargables"
                />
                <p className="ml-4">Recursos descargables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
