import { IoCloseSharp } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import './Trabalhos.css';

const opcoesData = [
    {
        id: 'um',
        nome: 'Painéis de automação',
        imgDefault: 'https://i.pinimg.com/736x/8b/68/a9/8b68a99a9ee1905a12b887a592cf92e4.jpg',
        imgHover: 'https://i.pinimg.com/736x/a2/e0/f2/a2e0f22a9d61d49319f75897605c8048.jpg',
        imagens: ['https://i.pinimg.com/736x/78/c8/07/78c8071d4ba196be977bbbb6168df305.jpg',
                    'https://i.pinimg.com/736x/08/cf/4a/08cf4a50d12978e7107c21e7a599b72f.jpg',
                    'https://i.pinimg.com/736x/1e/ec/a1/1eeca1793ab90fe093964f88766c8eca.jpg',
                    'https://i.pinimg.com/736x/2b/25/ff/2b25ffa5390316e72f91b2454a394526.jpg',
                    'https://i.pinimg.com/736x/7c/e3/ff/7ce3ffa051627ea1eacf9417d3045969.jpg',
                    'https://i.pinimg.com/736x/31/19/fb/3119fb98ee9938647344b8e7a0a79c1c.jpg',
                    'https://i.pinimg.com/736x/57/78/67/577867bba91f95499a6de2d5d1147e61.jpg',
                    'https://i.pinimg.com/736x/8a/0f/a4/8a0fa484b4a19f1194fb16bd57dcbb04.jpg',
                    'https://i.pinimg.com/736x/bf/40/3d/bf403dbf53c108f15f9440cf01c9211f.jpg',
                    'https://i.pinimg.com/736x/a9/70/3d/a9703d3928ee7767f8e82454809afb3c.jpg',
                    'https://i.pinimg.com/736x/f6/04/33/f60433eb33b669b84a335eb3cb3735d2.jpg',
                    'https://i.pinimg.com/736x/f9/7b/f3/f97bf3e63eecf81bb91fb3b31d51a144.jpg',
                    'https://i.pinimg.com/736x/71/b0/2f/71b02f1984d1def5ea91c4eb31259a84.jpg',
                    'https://i.pinimg.com/736x/41/06/76/41067652ca892c162b777ba6c1109c12.jpg',
                    'https://i.pinimg.com/736x/41/57/35/4157355a4bf6475cab90c9967df804aa.jpg',
                    'https://i.pinimg.com/736x/2d/ae/bb/2daebb721a07179e9e0aa6ae48dd53fb.jpg']
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
                        <IoCloseSharp size={50} color="#050428" className="iconAbsolute"/>
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
