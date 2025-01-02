
import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ 
  scrollToEmpresa, 
  scrollToTrabalhos, 
  scrollToDiferenciais,
  scrollToContato,
  scrollToTop,
}) {

  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {  //scroll
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <>
      <header className={scrolled ? 'header scroll' : 'header'}> {/* Aplica a classe 'scroll' */}
        <img onClick={scrollToTop} src="/logoeclipse.png" alt="logo" className="logo"/> 

        <ul>
          <li onClick={scrollToEmpresa}>EMPRESA</li> {/* Chama a função de rolagem */}
          <li onClick={scrollToTrabalhos}>TRABALHOS</li>
          <li onClick={scrollToDiferenciais}>DIFERENCIAIS</li>
          <li onClick={scrollToContato}>CONTATO</li>
        </ul>
      </header>
    </>
  );
}

export default Header;