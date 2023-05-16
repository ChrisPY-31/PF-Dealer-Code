import React from 'react'

const InfoCouse = ( {title , description ,instructor}) => {
  return (
    <div className=' h-3/4 flex flex-col justify-around'>
        <h1 className='text-5xl'>{title}</h1>
        <p>{description}</p>
        <div className='flex '>
            <p>puntuacion  </p>
            <p>img de estrellas </p>
            <p>Numero total de Estudiantes</p>
        </div>
        <div className=' flex'>
            <p>{instructor}</p>
            <p>Imagen del Profesor</p>
            <p>Nombre del Profesor</p>
        </div>
    </div>
  )
}

export default InfoCouse