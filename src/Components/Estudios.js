import React from 'react'
import fotoFormacion2 from '../Imagenes/natalia3.jpg';
import fotoFormacion3 from '../Imagenes/libro.jpg';
const Estudios = () => {
  return (
    <div className='ContenedorDosColumnas' id='Estudios'> 
      <div>
        <img className='FotoFormacion2'
            src={fotoFormacion2}
            alt="Foto del Portfolio"
        />

    
        <img className='FotoFormacion3'
            src={fotoFormacion3}
            alt="Foto del Portfolio"
        />

    </div>
      <ul className='Lista'>
          <h2>Estudios</h2>
        <ul>
            <h5></h5>
            <li>Ciclo Básico- Liceo Nueva Helvecia, Depto Colonia, Uruguay </li>
            <li>Bachillerato Biologico, Liceo Juan Lacaze, Depto Colonia, Uruguay</li>
        </ul>    
        <ul>
            <h5>Programación</h5>
            <li>Estudiante en carrera Analista Programador </li>
            <li>CTC-ORT Rosario.. cursando Año 2022 3er Semestre</li>
         
        </ul> 
        <ul>
            <h5>Cursos Relizados anteriores..Formacion</h5>
            <li>Logtra Operaciones/Almacen 2011</li>
            <li>Operador Profecional Office XP 2006</li>
            <li>Operador Experto Office XP 2006</li>
            <li>Administracion y Mantenimiento de Hardware 2007</li>
            <li>Auxiliar Administrativo Contable + Zeta Sigma 2008</li>
            <li>Operador Diseño Grafico 2009</li>
            <li>CTC Gestion Logistica 2021</li>
        </ul> 
        <ul>
            <h5>
                Certificados varios
            </h5>
            <li>ESAG Comunicacion No Verbal 2010</li>
            <li>ESAG Comunicacion y nuevas Tecnicas 2010</li>
            <li>ESAG Trabajo en Equipo 2010</li>
            <li>ESAG Negociacion 2010</li>
            <li>ESAG Liderazgo 2010</li>
            <li>STRATEGICS Entrenamiento a Supervision 2010</li>
        </ul>
      </ul>  
    </div>
  )
}

export default Estudios;
