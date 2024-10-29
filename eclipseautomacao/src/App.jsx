import React, { useRef } from 'react';
import Header from './components/Header';
import Eclipse from './components/Eclipse';
import Empresa from './components/Empresa';
import Trabalhos from './components/Trabalhos';
import Diferenciais from './components/Diferenciais';
import Contato from './components/Contato';

import './App.css';

function App() {
  const empresaRef = useRef(null);
  const trabalhosRef = useRef(null);
  const diferenciaisRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToRef = (ref) => {
    const element = ref.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY  - 150; // scroll 150px acima
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <main>
        <Header
          scrollToEmpresa={() => scrollToRef(empresaRef)}
          scrollToTrabalhos={() => scrollToRef(trabalhosRef)}
          scrollToDiferenciais={() => scrollToRef(diferenciaisRef)}
          scrollToContato={() => scrollToRef(contatoRef)}
        />

        <Eclipse />

        <section className='conteudo'>
          <h1 ref={empresaRef} className='h1Empresa'>EMPRESA</h1>
          <Empresa />

          <h1 ref={trabalhosRef} className='h1Trabalhos'>TRABALHOS</h1>
          <Trabalhos />
          
          <h1 ref={diferenciaisRef} className='h1Diferenciais'>DIFERENCIAIS</h1>
          <Diferenciais />

          <Contato ref={contatoRef}/>

        </section>
      </main>
    </>
  );
}

export default App;