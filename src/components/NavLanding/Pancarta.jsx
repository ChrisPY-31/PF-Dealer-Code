import React from 'react'

function Pancarta() {
  return (
    <section class=" text-white">
    <div
      class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-1/2 "
    >
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-r from-green-300 via-verde to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl"
        >
          Aprende algo nuevo hoy
  
          <span class="sm:block"> Y cambia tu mañana. </span>
        </h1>
  
        <p class="mx-auto mt-4  text-base max-w-xl sm:text-lg/relaxed">
         Cambia tu vida con el conocimiento. descubre nuestros cursos y enpieza a aprender hoy
        </p>
  
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Pancarta