import { IoCloseSharp } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import './Trabalhos.css';

const opcoesData = [
    {
        id: 'um',
        nome: 'Painéis de automação',
        imgDefault: 'https://i.pinimg.com/736x/8b/68/a9/8b68a99a9ee1905a12b887a592cf92e4.jpg',
        imgHover: 'https://i.pinimg.com/736x/a2/e0/f2/a2e0f22a9d61d49319f75897605c8048.jpg',
        imagens: ['https://i.pinimg.com/736x/78/c8/07/78c8071d4ba196be977bbbb6168df305.jpg','https://i.pinimg.com/736x/08/cf/4a/08cf4a50d12978e7107c21e7a599b72f.jpg', 'https://i.pinimg.com/736x/1e/ec/a1/1eeca1793ab90fe093964f88766c8eca.jpg', 'https://i.pinimg.com/736x/2b/25/ff/2b25ffa5390316e72f91b2454a394526.jpg']
    }
];

const Trabalhos = () => {
    const [isAbsoluteVisible, setIsAbsoluteVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Alterna a imagem a cada 5 segundos
    useEffect(() => {
        if (selectedOption) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    (prevIndex + 1) % selectedOption.imagens.length
                );
            }, 3000);

            return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
        }
    }, [selectedOption]);

    const handleOpcaoClick = (opcao) => {
        setSelectedOption(opcao);
        setIsAbsoluteVisible(true);
        setCurrentImageIndex(0); // Reseta o índice ao abrir
    };

    const handleCloseClick = () => {
        setIsAbsoluteVisible(false);
        setSelectedOption(null);
    };

    return (
        <div className='trabalhos'>
            <div className='conteinerTrabalhos'>

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

                {/* DENTRO */}    
                <div className={`absolute ${isAbsoluteVisible ? '' : 'fechado'}`}>
                    <div className='fechar' onClick={handleCloseClick}>
                        <IoCloseSharp size={50} color="#050428"/>
                    </div>

                    {selectedOption && (
                        <>
                            <h1 className="h1Absolute">{selectedOption.nome}</h1>
                            
                            <div className='imagensTrabalho'>
                                <img 
                                    src={selectedOption.imagens[currentImageIndex]} 
                                    alt={`Imagem ${currentImageIndex + 1} de ${selectedOption.nome}`} 
                                    className='fotos'
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Trabalhos;
