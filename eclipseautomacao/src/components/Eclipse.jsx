
import './Eclipse.css';
import React from 'react';

function Eclipse() {

  return (
    <div className='animacaoEclipse'>
        <img className='sol' src="/eclipse.png" alt="" />
      <div className='textoIncial' ref={top}>
        <h1 className='titulo'>ECLIPSE AUTOMAÇÃO</h1>
        <h2 className='subtitulo'>SOLUÇÕES DE AUTOMAÇÃO INDUSTRIAL</h2>
      </div>
    </div>
  );
}

export default Eclipse;
