import React from 'react'
import fotoFacebook from '../Imagenes/facebook.png'
import fotoInstagram from '../Imagenes/instagram.png'
const RedesSociales = () => {
  return (
    <div className='Contenedor' id='RedesSociales'>
      <div className='UnaLinea'>
        <a href='https://www.facebook.com/NataliaRodriguezGerber/' target='_blank'>
        <img className='Logo'
            src={fotoFacebook}
            alt="Logo Facebook "
        />
        </a>  
        <a href='https://www.instagram.com/nataliarodriguezgerber/' target='_blank'>
        <img className='Logo'
            src={fotoInstagram}
            alt="Logo Instagram "
        />
      
        </a>  
      </div>
    </div>
  )
}

export default RedesSociales;