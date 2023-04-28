import {  useState } from "react";

function EditPerfil() {
  let [Editar, setEditar] = useState({
    Nombre: null,
    Email: null,
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
 setValor({
  ...valor,
   [e.target.name]: e.target.value
 })
}
  return (
    <div className=' w-full h-96 flex items-center justify-center flex-col'>
     
    { Editar.Nombre === true ? <div className="w-full h-96 flex    flex-col">
      <label className="font-bold " >Nonbre</label>
      <input type="text" name="Nombre" valor={valor.Nombre} onChange={(e) => editado(e)} className='className=" w-96 text-base mt-2 px-3 py-2 text-gray-100  rounded-lg outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg"' />
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
        <button onClick={ () => {
          setEditar({
            ...Editar,
            Nombre: null
          })
          setPree({
            ...pree,
            Nombre: valor.Nombre
          })
        }}  className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-[#16c57c] hover:bg-blue-400  focus:bg-bg-blue-400  px-1 py-1 sm:py-1 sm:px-3'>
            Editar
        </button>
        
    </div>

</div>
     </div> : <div className="w-full h-96 flex   flex-col">
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
    </div> } 

     { Editar.Email === true ? <div className="w-full h-96 flex   flex-col">
      <label className="font-bold" >Email</label>
      <input type="text" name="Nombre" valor={valor.Nombre} onChange={(e) => editado(e)} className='className=" w-96 text-base mt-2 px-3 py-2 text-gray-100  rounded-lg outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg"'  />
      <div className='flex items-center mt-2 gap-2'>
    <div className="flex items-center">
        <button onClick={ () => {
          setEditar({
            ...Editar,
            Email: null
          })
          setValor({
           ...valor,
           Email: pree.Email
          })
        }} className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-white  hover:bg-blue-400  focus:bg-bg-blue-400 px-1 py-1 sm:py-1 sm:px-3'>
            Cancelar 
        </button>
        
    </div>
    <div className="flex items-center">
        <button onClick={ () => {
          setEditar({
            ...Editar,
            Email: null
          })
          setPree({
            ...Email,
            Email: valor.Email
          })
        }} className='relative inline-flex text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-[#16c57c] hover:bg-blue-400  focus:bg-bg-blue-400  px-1 py-1 sm:py-1 sm:px-3'>
            Editar 
        </button>
        
    </div>

</div>
     </div> : <div className="w-full h-96 flex   flex-col">
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
    </div> }
    

    </div>
  )
}

export default EditPerfil