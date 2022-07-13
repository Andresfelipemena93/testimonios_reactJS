import React from 'react';
import '../styles/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'> {/* Contenedor del testimonio */}
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}   
        alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'> {/* Contenedor del texto del testimonio */}
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>  {/* Fin del contenedor-texto-testimonio */}
    </div>
  );
}

export default Testimonio;