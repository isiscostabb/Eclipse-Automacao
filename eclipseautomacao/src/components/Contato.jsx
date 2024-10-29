
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import React from 'react';
import './Contato.css';

const Contato = React.forwardRef((props, ref) => {
  
  const telefone = '48999840062';
  const msgWpp = 'Olá, tenho interesse em fazer um orçamento para um serviço com a Eclipse Automação';
  const email = 'eclipseautomacao@hotmail.com';
  const msgEmail = 'Olá, tenho interesse em fazer um orçamento para um serviço com a Eclipse Automação';

  const abrirWhatsapp = () => {
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msgWpp)}`;
    window.open(url, '_blank');
  };

  const abrirEmail = () => {
    const url = `mailto:${email}?subject=${encodeURIComponent(msgEmail)}&body=${encodeURIComponent(msgWpp)}`;
    window.open(url, '_blank');
  };

  return (
    <div ref={ref} className="contato">
      <div className="conteinerContato">

        <h3 className='h3Contato' onClick={abrirWhatsapp}>
          <span className="icon"><FaWhatsapp /></span> (48) 99984-0062
        </h3>

        <br />
        <h3 className='h3Contato' onClick={abrirEmail}>
          <span className="icon dois"><MdOutlineEmail /></span> eclipseautomacao@hotmail.com
        </h3>

        <br />
        <br />
        <h2 className='h2Contato'>FAÇA AGORA SEU ORÇAMENTO CLICANDO EM UMA DAS DUAS OPÇÕES</h2>
        <br />
        <br />

      </div>
    </div>
  );
});

export default Contato;