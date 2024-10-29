
import './Empresa.css';
import Mapa from './Mapa';
import { useState } from 'react';

function Empresa() {

    const [position, setPosition] = useState(0); //posição slide

    const handleSlide = (index) => {
        setPosition(index * -80); // Mover 80vw
    };

    return (
        <>
            <div className='empresa'>

                <div className='conteinerEmpresa'>

                    <div className='deslizante' style={{ transform: `translateX(${position}vw)` }}>
                        <div className='slide'>
                            <img src="/mapa.png" alt="mapa" className='imgEmpresa' />
                            <p className='pEmpresa'>
                                Fundada em maio de 2011, traz o know-how de trabalhos realizados desde 1988 na área de eletrônica industrial, elétrica e automação industrial,
                                atendendo empresas na <span className='destaque'>Argentina, Bolívia, Itália</span> e estados como o <span className='destaque'>RS, SC, PR, SP, ES, MG, PE, PA, BA</span> entre outros.
                            </p>
                        </div>

                        <div className='slide'>
                            <Mapa />
                            <p className='pEmpresa'>
                                Situada no sul de Santa Catarina, na cidade de <span className='destaque'>Urussanga</span>, fica a alguns minutos de cidades como Criciúma, Braço do Norte e algumas horas
                                de Florianópolis e Joinville; grandes polos industriais.
                            </p>
                        </div>

                        <div className='slide'>
                            <img src="/mapa.png" alt="mapa" className='imgEmpresa' />

                            <p className='pEmpresa'>
                                A Eclipse Automação fornece <span className='destaque'>solução completa para sua necessidade de automação</span>, desde o projeto elétrico, montagem de painel, elaboração 
                                de software de automação, enfim, até o produto final. Também <span className='destaque'>terceiriza o desenvolvimento de projetos e softwares</span> para sua empresa,
                                atendendo em vários segmentos.
                            </p>
                        </div>

                        <div className='slide quatro'>
                            <p className='pEmpresa'>
                                Nossa experiencia em máquinas simples até as mais complexas, como equipamentos rápidos e uso de tecnologias com alto poder de processamento
                                e rapidez, nos habilita a ser <span className='destaque'>seu parceiro ideal</span> no projeto e execução de sistemas de automação nas mais diversas áreas, permitindo assim, 
                                <span className='destaque'> elevar a competividade de nossos clientes.</span>
                            </p>
                        </div>
                    </div>

                </div>

                <div className='botoesEmpresa'>
                    {[0, 1, 2, 3].map((index) => (
                        <button key={index} className='botaoEmpresa' onClick={() => handleSlide(index)}>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Empresa;