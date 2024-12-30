
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from 'react';
import './Trabalhos.css';

const opcoesData = [
    {
        id: 'um',
        nome: 'Grupo1',
        imgDefault: '/public/Grupo1.png',
        imgHover: '/public/Grupo1-2.png',
        imagens: ['']
    },
    {
        id: 'dois',
        nome: 'Grupo2',
        imgDefault: '/public/Grupo2.png',
        imgHover: '/public/Grupo2-2.png',
        imagens: ['public/Grupo2/imgGrupo2(1).jpg', 'public/Grupo2/imgGrupo2(2).jpg', 'public/Grupo2/imgGrupo2(3).jpg', 'public/Grupo2/imgGrupo2(4).jpg']
    },
    {
        id: 'tres',
        nome: 'Grupo3',
        imgDefault: '/public/Grupo3.png',
        imgHover: '/public/Grupo3-2.png',
        imagens: ['']
    },
    {
        id: 'quatro',
        nome: 'Grupo4',
        imgDefault: '/public/Grupo4.png',
        imgHover: '/public/Grupo4-2.png',
        imagens: ['']
    },
    {
        id: 'cinco',
        nome: 'Grupo5',
        imgDefault: '/public/Grupo5.png',
        imgHover: '/public/Grupo5-2.png',
        imagens: ['']
    },
    {
        id: 'seis',
        nome: 'Grupo6',
        imgDefault: '/public/Grupo6.png',
        imgHover: '/public/Grupo6-2.png',
        imagens: ['']
    }
];

const Trabalhos = () => {
    const [isAbsoluteVisible, setIsAbsoluteVisible] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);

    //Opções
    const handleOpcaoClick = (opcao) => {
        setSelectedOption(opcao);
        setIsAbsoluteVisible(true);
    };

    //Ver mais
    const handleCloseClick = () => {
        setIsAbsoluteVisible(false);
        setSelectedOption(null);
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
                            onClick={() => handleOpcaoClick(opcao)}>

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
                    {selectedOption && (
                        <>
                            <h1>. {selectedOption.nome}</h1>
                            <div className='imagensTrabalho'>
                                {selectedOption.imagens.map((imgSrc, index) => (
                                    <img key={index} src={imgSrc} alt={`Imagem ${index + 1} de ${selectedOption.nome}`} className='ts'/>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Trabalhos;