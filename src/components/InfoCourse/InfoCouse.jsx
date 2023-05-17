import React from 'react'

const InfoCouse = ( {title , description ,instructor}) => {
  return (
    <div className=' h-1/2 flex flex-col justify-evenly'>
        <h1 className='text-5xl text-bold'>{title}</h1>
        <p className='font-medium text-2xl'>{description}</p>
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