
import './Eclipse.css';
import React, { useRef, useState, useEffect, Suspense } from 'react';

function Eclipse() {

  const Top = React.forwardRef((props, top) => {})

  return (
    <div className='animacaoEclipse'>
        {/*<img className='lua' src="/lua.png" alt="" />
        <img className='sol' src="/sol.png" alt="" />*/}
      <div className='textoIncial' ref={top}>
        <h1 className='titulo'>ECLIPSE AUTOMAÇÃO</h1>
        <h2 className='subtitulo'>SOLUÇÕES DE AUTOMAÇÃO INDUSTRIAL</h2>
      </div>
    </div>
  );
}

export default Eclipse;
