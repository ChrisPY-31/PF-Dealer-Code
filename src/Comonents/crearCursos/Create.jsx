import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addtoken } from "@/store/usuario";
import { crearCurso } from "@/store/reducer/addPagos/agregarPago";

const urlRegExp = /(http|https?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/;
const numberRegExp = /^([0-9][0-9]{0,2}|1000)$/;
function Create() {
  






let initiavalue = {
  titulo: "",
  nombre: "",
  description: "",
  precio: 0,
  urlvideo: "",
  categorias: []
  
}



let dispach = useDispatch()

  return (
    <div className='w-full mt-10'>
       
     <div className="flex justify-center "> 
      <Formik 
      
      initialValues={initiavalue}

      validate={(valores) => {
       let errors = {}
       if(   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.titulo)) {
        errors.titulo = "El titulo solo puede contener letras y espacios"
      } else if(valores.titulo.length === 0) {
       errors.titulo = "No te olvides del titulo"
      }

      if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
       errors.nombre = "El nombre solo puede contener letras y espacios "
     } else if(valores.nombre.length === 0) {
      errors.nombre = "No te olvides del nombre"
     }
     
     if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.description)) {
       errors.description = "La descrition solo puede contener letras y espacios "
     } else if(valores.description.length > 350) {
      errors.description = "La descricion no ude contener mas de 350 palabras"
     } else if(valores.description.length === 0) {
       errors.description = "Agrega la descricion"
     }

     if(valores.precio === 0) {
       errors.precio = "agrega un recio"
     } 

     if(!urlRegExp.test(valores.urlvideo)) {
       errors.urlvideo = "Agrega una url valida"
     } else if(valores.urlvideo.length === 0) {
      errors.urlvideo = "No te olvides del video"
     }

     if(valores.categorias.length === 0 || valores.categorias === "categorias") {
       errors.categorias = "Agrega por lo menos una categoria"
     } 
    
     return errors
      }}

      onSubmit={(valores, {resetForm}) => {
         resetForm()
          
         onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
          console.log(usuarioFirebase);
          if (usuarioFirebase) {
            dispach(crearCurso({
              titulo: valores.titulo, 
              instructor: valores.nombre,
               video: valores.urlvideo,
                descripcion: valores.description,
                price: valores.precio,
                token: usuarioFirebase.accessToken
              }))
          } 
        });
      }}

      >
        {({errors}) => (
          <Form className=" columns-6 gap-5 flex flex-col ">

            {/* nombre y titulo */}
            <div className=" gap-5 flex flex-col mt-3">
            <div  className=" block" >
              <Field type="text" name="titulo" className="h-10 w-full  mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Titulo  del curso" />
                    { <ErrorMessage name="titulo" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.titulo}</span>
               )} />   }
            </div>
            <div  className=" block">
              <Field type="text" name="nombre" className="h-10 w-full mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Nombre de instructor" />
                    { <ErrorMessage name="nombre" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.nombre}</span>
               )} />   }
            </div>
           
            </div> 

             {/* descripcion  y precio */}

            <div className="columns-4 gap-5 flex flex-col mt-3">
            <div  className=" block">
              <Field as ="textarea" name="description" className="h-15 mt-1 w-full rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="agraga una descripcion" />
                    { <ErrorMessage name="description" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.description}</span>
               )} />   }
            </div>
            <div  className=" block">
              <Field type="number" name="precio" className="h-10 mt-1 rounded-lg w-full placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Dale un precio a tu curso" />
                  { <ErrorMessage name="precio" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.precio}</span>
               )} />   }
            </div>
           
            </div> 

             {/* video  */}
             <div className="columns-4 gap-5 flex flex-col mt-3">
            {/* <div>
              <Field type="file" name="urlvideo" className="h-10 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="sube un video" />
            </div> */}
            <div  className=" block">
              <Field type="text" name="urlvideo" className="h-10 mt-1 w-full rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder=" url del video" />
                     { <ErrorMessage name="urlvideo" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.urlvideo}</span>
               )} />   }
            </div>
            
            </div> 

             {/* categoria y subcategoria */}
              <div className="columns-4 gap-5 flex flex-col mt-3">
            <div  className=" block">
              <label htmlFor="">Categorias</label>
              <Field as="select" name="categorias" className="h-10 mt-1 w-full rounded-lg text-black text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Tu nombre de instructor" >
                    <option value="categorias">
                      categorias
                    </option>
                    <option value="react">
                      React
                    </option>
                    <option value="next js">
                      Next 
                    </option>
                   </Field>
                   { <ErrorMessage name="categorias" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.categorias}</span>
               )} />   }
            </div>
           
            <button  type="submit"  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                        Crear
                     </button>
            </div> 

            

          </Form>
        )}
      </Formik>
     </div>
    </div>
  )
}

export default Create