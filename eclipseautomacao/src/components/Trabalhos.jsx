
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from 'react';
import './Trabalhos.css';

const opcoesData = [
    { id: 'um', nome: 'CEUSA', imgDefault: '/public/ceusa1.png', imgHover: '/public/ceusa2.png' },
    { id: 'dois', nome: 'MADEREIRA', imgDefault: '/public/madereira1.png', imgHover: '/public/madereira2.png' },
    { id: 'tres', nome: 'PORTINARI', imgDefault: '/public/portinari1.png', imgHover: '/public/portinari2.png' },
    { id: 'quatro', nome: 'DECA', imgDefault: '/public/deca1.png', imgHover: '/public/deca2.png' },
    { id: 'cinco', nome: 'ELDORADO', imgDefault: '/public/eldorado1.png', imgHover: '/public/eldorado2.png' },
    { id: 'seis', nome: 'INCEPA', imgDefault: '/public/incepa1.png', imgHover: '/public/incepa2.png' }
];

function Trabalhos() {
    const [isAbsoluteVisible, setIsAbsoluteVisible] = useState(false);

    const handleOpcaoClick = () => {
        setIsAbsoluteVisible(true);
    };

    const handleCloseClick = () => {
        setIsAbsoluteVisible(false);
    };

    return (
        <div className='trabalhos'>
            <div className='conteinerTrabalhos'>

                <div className='conteinerVideo'>
                    <video src="/video trailer.mp4" autoPlay loop muted preload='auto' className='video'></video>
                </div>

                <div className='conteinerOpcoes'>
                    {opcoesData.map(opcao => (
                        <div
                            className={`opcao ${opcao.id}`}
                            key={opcao.id}
                            onClick={handleOpcaoClick}>

                            <div
                                className={`imgOpcao ${opcao.id}`}
                                style={{ backgroundImage: `url(${opcao.imgDefault})` }}
                                onMouseOver={e => e.currentTarget.style.backgroundImage = `url(${opcao.imgHover})`}
                                onMouseOut={e => e.currentTarget.style.backgroundImage = `url(${opcao.imgDefault})`}
                            ></div>

                            <h2 className='txtOpcao'>{opcao.nome}</h2>
                        </div>
                    ))}
                </div>
                    
                <div className={`absolute ${isAbsoluteVisible ? '' : 'fechado'}`}>
                    <div className='fechar' onClick={handleCloseClick}>
                        <IoCloseSharp size={50} color="#050428"/>
                    </div>
                    <br />
                    <h1>TRABALHOS CEUSA</h1>
                    <br />
                    <br />
                    <img src="/c1.jpg" alt=""  className='ts'/>
                    <br />
                    <img src="/c2.jpg" alt=""  className='ts'/>
                    <br />
                    <img src="/c3.jpg" alt=""  className='ts'/>

                </div>

            </div>
        </div>
    );
}

export default Trabalhos;
