import React from 'react'
import { useSelector } from 'react-redux'

function Pagos() {

  const Courses=useSelector(state=>state.getCursos.cursos)
  const CursosPagos=useSelector(state=>state.pagos.pagos)
  
  let cursos = []

  Courses.forEach(c => {
    let id = c.id
    CursosPagos.forEach(i => {
      if(i === id) {
        cursos.push(c)
      }
    })
  });

 
  return (
    <div classNameName='w-full h-96 flex flex-col'> 
     <div >
      <h1 className='text-xl  font-bold'>Tu historial de pagos</h1>
     </div>
       {  cursos && cursos.length ? cursos.map(c => (
        <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img 
                alt="Les Paul"
                src="https://i.pinimg.com/564x/14/77/9d/14779d4968d4999239dc8264fdd026cc.jpg"
                class="aspect-square w-full rounded-xl object-cover"
              />
      
            </div>
      
            <div class="sticky top-0">
              <strong
                class="rounded-full border border-blue-600 bg-verde px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
              >
                Pagado
              </strong>
      
              <div class="mt-2 flex justify-between">
                <div class="max-w-[35ch] space-y-2">
                  <h1 class="text-xl font-bold sm:text-2xl">
                   {c.titulo}
                  </h1>
      
                  <p class="text-sm">Curso Intensivo</p>
      
                  <div class="-ms-0.5 flex">
                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
      
                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
      
                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
      
                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
      
                    <svg
                      class="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                </div>
      
                <p class="text-lg font-bold">{c.price}</p>
              </div>
      
              <div class="mt-1">
                <div class="prose max-w-none">
                  <span className='text-sm '>
                  {c.descripcion}
                  </span>
                </div>
              </div>
      
              <div class="mt-3">
      
                <div class="mt-3 flex gap-4">
                  <span
                    
                    class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                   Ir al curso
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       )) : <div>
  <h2>
  No tienes cursos comprados
  </h2>
  <span>Aqui apareceran tus cumpras y la con la informacion de la misma y del curso que compraste</span>
</div> }

    </div>
  )
}

export default Pagos



