import {  useState } from "react";
import Contraseña from "./Contraseña";

function EditPerfil() {
  let [Editar, setEditar] = useState({
    Nombre: null,
    Email: null,
})
let [error, setError] = useState({
  Nombre: null,
  Email: null
})
let [contraseña, setContraseña] = useState({
  ver: false,
  editar: false
})
let [exito, setExito] = useState({
  Nombre: false,
  Email: false
})
let [pree, setPree] = useState({
  Nombre: "Evin Lopez",
  Email: "evinlopez90@gmail.com",
})

let [valor, setValor] = useState({
  Nombre: "Evin Lopez",
  Email: "evinlopez90@gmail.com",
})
function editado (e) {
  if( e.target.name === "Nombre" && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(e.target.value)) {
    setError({
      ...error,
      Nombre: "El nombre solo puede contener letras y espacios"
    })
  } else {
    setValor({
      ...valor,
       [e.target.name]: e.target.value
     })
     setError({
      ...error,
      Nombre: null
    })
  }
  
   
  }

  function editadoF (e) {
    if( e.target.name === "Email" && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value)) {
      setError({
        ...error,
        Email: "El correo solamente puede contener letras, numeros, puntos, giones y gion bajo"
      })
    } else {
      setValor({
        ...valor,
         [e.target.name]: e.target.value
       })
       setError({
        ...error,
        Email: null
      })
    }
  }
  
   function hanledSubmit (e) {
    e.preventDefault()
     if(valor.Nombre === pree.Nombre || valor.Nombre === "") {
      setError({
        ...error,
        Nombre: "Por favor ingresa un nombre"
      })
     } else {
      setPree({
        ...pree,
        Nombre: valor.Nombre
      })
      setEditar({
        ...Editar,
        Nombre: null
      })
      setExito({
        ...exito,
        Nombre: true
      })
      setTimeout(() => setExito({
        ...exito,
        Nombre: false
      }), 5000)
     }

     
   }

function hanledSubmitF (e) {
  e.preventDefault()
  if(valor.Email === pree.Email ||  valor.Email === "") {
    setError({
      ...error,
      Email: "Por favor ingresa un email"
    })
   } else {
    setPree({
      ...pree,
      Email: valor.Email
    })
    setEditar({
      ...Editar,
      Email: null
    })
    setExito({
      ...exito,
      Email: true
    })
    setTimeout(() => setExito({
      ...exito,
      Email: false
    }), 5000)
   }
}
  return (
    <div className=' w-full  h-96 flex items-center justify-center flex-col'>
     
    { Editar.Nombre === true ? <form onSubmit={(e) => hanledSubmit(e)} className="w-full h-96 flex    flex-col">
      <label className="font-bold " >Nonbre</label>
      <input type="text" name="Nombre" valor={valor.Nombre} onChange={(e) => editado(e)} className=' w-96 text-base mt-2 px-3 py-2 text-gray-100   outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg' />
      {error.Nombre !== null ?  <div className="text-base">
        {error.Nombre}
      </div> : null}
      <div className='flex items-center mt-2 gap-2'>
    <div className="flex items-center">
        <button onClick={ () => {
          setEditar({
            ...Editar,
            Nombre: null
          })
          setValor({
           ...valor,
           Nombre: pree.Nombre
          })
        }} className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-white  hover:bg-blue-400  focus:bg-bg-blue-400 px-1 py-1 sm:py-1 sm:px-3'>
            Cancelar 
        </button>
        
    </div>
    <div className="flex items-center">
        <button type="submit" className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-[#16c57c] hover:bg-blue-400  focus:bg-bg-blue-400  px-1 py-1 sm:py-1 sm:px-3'>
            Editar
        </button>
        
    </div>

</div>
     </form> : <div className="w-full h-96 flex   flex-col">
      <label className="font-bold" >Nombre</label>
      <div className='className=" w-96 text-base  mt-2 px-3 py-2 text-gray-100  rounded-lg outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg"' >
        <span>{valor.Nombre}</span>
      </div>
      <div className="flex items-center mt-2">
        <button onClick={ () => setEditar({
          ...Editar,
          Nombre: true
        })}  className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-[#16c57c] hover:bg-blue-400  focus:bg-bg-blue-400  px-1 py-1 sm:py-1 sm:px-3'>
            Editar nombre
        </button>
        
        
    </div>
    {exito.Nombre === true ? <span className="text-verde text-base ml-3">Tu nombre se cambio con exito</span> : null}
    </div> } 

     { Editar.Email === true ? <form onSubmit={(e) => hanledSubmitF(e)} className="w-full h-96 flex   flex-col">
      <label className="font-bold" >Email</label>
      <input type="text" name="Email" valor={valor.Email} onChange={(e) => editadoF(e)} className='className=" w-96 text-base mt-2 px-3 py-2 text-gray-100  rounded-lg outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg"'  />
      {error.Email !== null ?  <div className="text-base">
        {error.Email}
      </div> : null}
      <div className='flex items-center mt-2 gap-2'>
    <div className="flex items-center">
        <button onClick={ () => {
          setEditar({
            ...Editar,
            Email: null
          })
          
        }} className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-white  hover:bg-blue-400  focus:bg-bg-blue-400 px-1 py-1 sm:py-1 sm:px-3'>
            Cancelar 
        </button>
        
    </div>
    <div className="flex items-center">
        <button type="submit"  className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-[#16c57c] hover:bg-blue-400  focus:bg-bg-blue-400  px-1 py-1 sm:py-1 sm:px-3'>
            Editar 
        </button>
        
    </div>

</div>
     </form> : <div className="w-full h-96 flex   flex-col">
      <label className="font-bold" >Email</label>
      <div className='className=" w-96 text-base  mt-2 px-3 py-2 text-gray-100 cursor-auto  rounded-lg outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg"' >
        <span>{valor.Email}</span>
      </div>
      <div className="flex items-center mt-2">
        <button onClick={ () => setEditar({
          ...Editar,
          Email: true
        })} className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-[#16c57c] hover:bg-blue-400  focus:bg-bg-blue-400  px-1 py-1 sm:py-1 sm:px-3'>
            Editar Email
        </button>
        
    </div>
    {exito.Email === true ? <span className="text-verde text-base ml-3">Tu email se cambio con exito</span> : null}
    </div> }
    
      {contraseña.editar === true ? <div className="w-full h-96 flex  flex-col"><Contraseña/></div> : <div className="w-full h-96 flex   flex-col">
      <label className="font-bold" >Contaseña</label>
      <div className=' w-96 text-base  mt-2 px-3 py-2 text-gray-100 cursor-auto  rounded-lg outline-none bg-gray-500 focus:border-indigo-600 shadow-sm ' >
        <span>**********</span>
      </div>
      <div className="flex items-center mt-2">
        <button onClick={ () => setContraseña({
          ...contraseña,
          editar: true
        })} className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-[#16c57c] hover:bg-blue-400  focus:bg-bg-blue-400  px-1 py-1 sm:py-1 sm:px-3'>
            Editar contraseña
        </button>
        
    </div>
      </div>  }
    </div>
  )
}

export default EditPerfil