import React from 'react'
import Natalia1 from'../Imagenes/family.jpeg';
import Curriculum from '../Imagenes/Curriculum Vitae Natalia Rodriguez.pdf';

const MisDatos = () => {
  return (
    <div className='ContenedorDosColumnas' >
        <div>
        <img className='FotoPortfolio'
            src={Natalia1}
            alt="Foto del Portfolio"
        />

    </div>
    <div> 
      
      <ul className='Lista'>
        <h2>Info. Personal</h2>
        <p>Nombre: Natalia Rodriguez Gerber</p>
        <p>Fecha de Nacimiento: 6 de Febrero de 1983</p>
        <p>Estado Civil: Casada</p>
        <p>Mama de un niño Aaron Peyronel</p>
        <p>Telefono: 095847084</p>
        <p>Correo Electrónico: dariostar.nataliarodriguez@gmail.com</p>
        <button className='Botones' id='Formacion'>
          <a href={Curriculum} target="_blank" rel="noopener noreferrer" download="Curriculum Vitae Natalia Rodriguez.pdf"> 
          Descargar Curriculum 
          </a>
        </button>
      </ul>  
    </div>
    </div>
  )
 
}

export default MisDatos