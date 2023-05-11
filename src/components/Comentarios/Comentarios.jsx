import React from 'react'

const Comentarios = () => {
  return (
    <div>
        <form action="" className='border-1 border-black flex flex-col '>
        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-40" placeholder="Escribe una duda o comentario"></textarea>
        <button className='rounded-md bg-teal-600 px-5 py-2.5 text-lg uppercase font-medium text-black shadow w-full mt-6 hover:bg-teal-800'>Publicar Comentario</button>
        </form>  

        <hr className='mt-10'/>
        <div className='mt-10'>
        <h2 className='font-bold'>0 Comentarios</h2>    
        </div> 
    </div>
  )
}

export default Comentarios