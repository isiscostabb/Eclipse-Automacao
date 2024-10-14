
import React, { useRef } from 'react';
import Header from './components/Header';
import Eclipse from './components/Eclipse';
import Empresa from './components/Empresa';
import Trabalhos from './components/Trabalhos';
import Diferenciais from './components/Diferenciais';

import './App.css';

function App() {
  const empresaRef = useRef(null);
  const trabalhosRef = useRef(null);
  const diferenciaisRef = useRef(null);
  const valoresRef = useRef(null);
  const contatoRef = useRef(null);

  return (
    <>
      <main>
        <Header
          scrollToEmpresa={() => empresaRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToTrabalhos={() => trabalhosRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToDiferenciais={() => diferenciaisRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToValores={() => valoresRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToContato={() => contatoRef.current.scrollIntoView({ behavior: 'smooth' })}
        />

        <Eclipse />

        <section className='conteudo'>
          <h1 ref={empresaRef} className='h1Empresa'>EMPRESA</h1>
          <Empresa />

          <h1 ref={trabalhosRef} className='h1Trabalhos'>TRABALHOS</h1>
          <Trabalhos />
          
          <h1 ref={diferenciaisRef} className='h1Diferenciais'>DIFERENCIAIS</h1>
          <Diferenciais />

          {/*<h1 ref={valoresRef} className='h1Valores'>VALORES</h1>

          <h1 ref={contatoRef} className='h1Contato'>CONTATO</h1>*/}

        </section>
      </main>
    </>
  );
}

export default App;
