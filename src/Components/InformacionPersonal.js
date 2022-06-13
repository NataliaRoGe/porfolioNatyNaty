import React from 'react'
import Natalia0 from'../Imagenes/Natalia0.jpg'

const InformacionPersonal = () => {
  return (
    <div className='ContenedorDosColumnas' id='InformacionPersonal'> 
    <div>
        <img className='FotoPortfolio'
            src={Natalia0}
            alt="Foto del Portfolio"
        />

    </div>
    <div>
      <ul className='Lista'>
        <h3>Informacion Personal</h3>
        <p>Nunca tuve la oportunidad de hacer una carrera, ya de grande la puedo hacer..</p>
        <p>Desde el 2007 estoy trabajando como encargada de la central logistica de una cadena de sucursales llamada Los Muchachos y Dapie</p>
        <p>En el 2021 con el tema de la pandemia me insentive a estudiar esta carrera que ni sabia de que se rtataba hasta que una compañera de trabajo me comento de que se trataba y me intereso</p>
        <p id='InformacionPersonal'>Desde que comence a aprender me doy cuenta el mundo de la programacion es muy amplio y rico... solo se que no se nada... cada clase un aprendizaje</p>
      </ul>  
    </div>
    </div>
  )
}

export default InformacionPersonal;