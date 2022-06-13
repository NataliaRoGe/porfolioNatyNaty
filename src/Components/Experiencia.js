import React from 'react'
import Natalia2 from'../Imagenes/Logistica-Ecologica.jpg.webp';

const Experiencia = () => {
  return (
    <div className='ContenedorDosColumnas' id='Experiencia'>
        <div>
        <img className='Experiencia'
            src={Natalia2}
            alt="Foto del Portfolio"
        />

    </div>
      <ul className='Lista'>
      <h2>Experiencia Laboral</h2>
        <ul>
            <h5>Actual trabajo en Casa Central Los Muchachos Dapie desde 2007 a la fecha</h5>
            <li>Encargada Logistica Deposito</li>
        </ul>    
      </ul>  
    </div>
  )
}

export default Experiencia