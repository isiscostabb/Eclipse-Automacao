
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
                                Fundada em maio de 2011, traz o know-how de trabalhos realizados desde 1988 na área de eletrônica e automação industrial, elétrica e automação industrial,
                                atendendo empresas na <span className='destaque'>Argentina, Bolívia, Itália</span> e estados como o <span className='destaque'>RS, SC, PR, SP, ES, MG, PE, PA, BA</span> entre outros.
                            </p>
                        </div>

                        <div className='slide'>
                            <Mapa />
                            <p className='pEmpresa'>
                                Situada no sul de Santa Catarina, em <span className='destaque'>Urussanga</span>, ficando a poucos minutos de cidades como Cocal do Sul e Criciúma, e algumas horas
                                de Florianópolis e Joinville; grandes polos industriais.
                            </p>
                        </div>

                        <div className='slide'>
                            {/*<img src="/mapa.png" alt="mapa" className='imgEmpresa' />*/}

                            <p className='pEmpresa'>
                                A Eclipse Automação fornece <span className='destaque'>soluções completas para as suas necessidades </span>, desde o projeto elétrico, montagem de painel, elaboração 
                                de software de automação, até o produto final. Também <span className='destaque'>terceiriza o desenvolvimento de projetos e softwares</span> para a sua empresa.                            </p>
                        </div>

                        <div className='slide quatro'>
                            <p className='pEmpresa'>
                                Nossa experiencia se estende desde máquinas simples até as mais complexas, como equipamentos que exigem movimentos rápidos e uso de tecnologias com alto poder de processamento
                                e rapidez, habilitando-nos a ser <span className='destaque'>seu parceiro ideal</span> em seus projetos e execução de sistemas de automação nas mais diversas áreas, permitindo assim, 
                                <span className='destaque'> elevar a sua competividade.</span>
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