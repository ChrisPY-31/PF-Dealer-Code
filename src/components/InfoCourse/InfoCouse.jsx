import React from 'react'

const InfoCouse = () => {
  return (
    <div className=' h-3/4 flex flex-col justify-around'>
        <h1 className='text-5xl'>Curso de manejo de estado en React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id impedit harum, nihil sunt, possimus, voluptas maiores placeat cum consequatur error. Doloribus officia, pariatur repellendus ab recusandae voluptatibus harum. Blanditiis!</p>
        <div className='flex '>
            <p>puntuacion  </p>
            <p>img de estrellas </p>
            <p>Numero total de Estudiantes</p>
        </div>
        <div className=' flex'>
            <p>Profesor</p>
            <p>Imagen del Profesor</p>
            <p>Nombre del Profesor</p>
        </div>
    </div>
  )
}

export default InfoCouse