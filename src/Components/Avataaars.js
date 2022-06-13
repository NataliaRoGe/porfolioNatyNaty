import React from 'react'
import avataaars from '../Imagenes/avataaars.png'

const Avataaars = () => {
  return (
    <div className='Avataaars'>
      <a href='#Inicio'>
        <img className='avataars'
            src={avataaars}
            alt="avataaars "
        />
        </a>    
    </div>

  )
}

export default Avataaars