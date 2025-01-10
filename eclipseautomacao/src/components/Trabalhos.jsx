import { IoCloseSharp } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import './Trabalhos.css';

const opcoesData = [
    {
        id: 'um',
        nome: 'Painéis de automação',
        imgDefault: 'https://i.pinimg.com/736x/18/e9/b1/18e9b13dd9b823caa17b019439c30613.jpg',
        imgHover: 'https://i.pinimg.com/736x/96/7f/69/967f69bcff55eec6a3220a9d6dcc1499.jpg',
        imagens: ['https://i.pinimg.com/736x/f0/d4/a3/f0d4a3f5b8eaaa6404afc67a152d8454.jpg',
                'https://i.pinimg.com/736x/f0/d4/a3/f0d4a3f5b8eaaa6404afc67a152d8454.jpg',
                'https://i.pinimg.com/736x/1a/01/bc/1a01bc9267a03b502d1e2c6c08207889.jpg',
                'https://i.pinimg.com/736x/8f/15/2b/8f152b60b65e24cac9be4a6057f6ecd1.jpg',
                'https://i.pinimg.com/736x/a3/8e/2b/a38e2b1a6bbc5a7c76a6ac22088a78bf.jpg',
                'https://i.pinimg.com/736x/5a/43/8a/5a438ab450e9e26ec7667cbcb6b3cafa.jpg',
                'https://i.pinimg.com/736x/7c/e3/ff/7ce3ffa051627ea1eacf9417d3045969.jpg',
                'https://i.pinimg.com/736x/df/97/68/df97687f621b1291158e29823963b757.jpg',
                'https://i.pinimg.com/736x/57/78/67/577867bba91f95499a6de2d5d1147e61.jpg',
                'https://i.pinimg.com/736x/2b/d7/9f/2bd79f25dc5394b95c850ee610cfbc72.jpg',
                'https://i.pinimg.com/736x/c3/45/cc/c345cc0668426d5b6a4e42e4e6361251.jpg',
                'https://i.pinimg.com/736x/87/60/43/876043cd2f04ae14c2e13d4beb322c1b.jpg',
                'https://i.pinimg.com/736x/f6/04/33/f60433eb33b669b84a335eb3cb3735d2.jpg',
                'https://i.pinimg.com/736x/0b/f9/e0/0bf9e01b2a9a2c9a715dea0999a124c0.jpg',
                'https://i.pinimg.com/736x/b1/03/f4/b103f4ad1b28e7179a36c66642b3ce4b.jpg',
                'https://i.pinimg.com/736x/41/06/76/41067652ca892c162b777ba6c1109c12.jpg',
                'https://i.pinimg.com/736x/78/5b/c5/785bc5aaad963afe5b3187d3b5e33bf2.jpg',
                'https://i.pinimg.com/736x/5c/99/d3/5c99d353c2adfbc398e9bd187fd2171b.jpg',
                'https://i.pinimg.com/736x/be/1c/35/be1c350a88bee9654f06e346bbad7e9a.jpg',
                'https://i.pinimg.com/736x/81/3d/51/813d51836010f4431c1e1408f642ca14.jpg',
                'https://i.pinimg.com/736x/c1/5b/16/c15b16fbe3f9317f77b2edad06a05471.jpg',
                'https://i.pinimg.com/736x/84/58/bc/8458bc48a82c121688659207c5c00d80.jpg',
                'https://i.pinimg.com/736x/ec/04/f6/ec04f6bd5e95bd6092d69e04c67b0e90.jpg',
                'https://i.pinimg.com/736x/6e/e3/2d/6ee32daac94379cea3f6199acb3c09dd.jpg',
                'https://i.pinimg.com/736x/07/15/b4/0715b4de5fe2d8e06c0aa002d38a67c3.jpg',
                'https://i.pinimg.com/736x/98/5b/37/985b37324d6950af70c1b57d7891fbd7.jpg',
                'https://i.pinimg.com/736x/8d/8a/60/8d8a605f0694f88770fbf7a0941c9a78.jpg',
                'https://i.pinimg.com/736x/9c/3f/30/9c3f3075fc981c214796245e64b509b8.jpg',
                'https://i.pinimg.com/736x/8e/ce/89/8ece89b79379e9c907f69454f754cf44.jpg',
                'https://i.pinimg.com/736x/3c/b9/48/3cb948e83fdc334200928615848c494e.jpg',
                'https://i.pinimg.com/736x/22/56/63/22566324fa079f3eb4944eadc247b645.jpg',
                'https://i.pinimg.com/736x/7a/67/4b/7a674b3cca4af307d4573a4a7b0a5197.jpg',
                'https://i.pinimg.com/736x/7e/e2/7e/7ee27e9f84a5d9173a6cc5e5e7c8e8d5.jpg',
                'https://i.pinimg.com/736x/0a/b1/f9/0ab1f95870b8ecaa44775eaf8097932a.jpg',
                'https://i.pinimg.com/736x/cb/4b/53/cb4b53f6f977933be64837b5bd952f9b.jpg',
                'https://i.pinimg.com/736x/c7/c1/1b/c7c11b5ac792171871db405e77bd3dcc.jpg',
                'https://i.pinimg.com/736x/79/9e/d4/799ed4372414f761f7d3d69deceb4dd4.jpg',
                'https://i.pinimg.com/736x/75/25/43/752543b31251fc6e038883f552d575e3.jpg',
                'https://i.pinimg.com/736x/d9/08/f1/d908f126f6723a082884ed8aec8d495b.jpg',
                'https://i.pinimg.com/736x/87/62/f0/8762f0caad085655e2f619456f3cdac5.jpg',
                'https://i.pinimg.com/736x/a6/03/01/a603012f20ce37c7edd9f6e0ddce14df.jpg',
                'https://i.pinimg.com/736x/99/78/56/997856c30742ad04f531db96126f4560.jpg',
                'https://i.pinimg.com/736x/fd/ac/09/fdac09f30834d1725a72dc25e2464770.jpg',
                'https://i.pinimg.com/736x/b7/06/6b/b7066bd4c5bcaf4cd77676f01be92442.jpg',
                'https://i.pinimg.com/736x/ee/00/b5/ee00b53acb70b04bc274e3f3a6dec958.jpg',
                'https://i.pinimg.com/736x/87/da/8e/87da8edf8ef5be92f93cfa32c6c29b15.jpg',
                'https://i.pinimg.com/736x/0f/39/d5/0f39d5c0dbd4ef22a8f4dccda0833b01.jpg'
        ]
    },

    {
        id: 'um',
        nome: 'Máquinas Novas',
        imgDefault: 'https://i.pinimg.com/736x/de/27/44/de2744d9053f0f92c643441634dbe434.jpg',
        imgHover: 'https://i.pinimg.com/736x/11/aa/85/11aa85cef67fc4c099ac45c84a5f5196.jpg',
        imagens: ['https://i.pinimg.com/736x/23/80/76/238076f05f3b1d2cdd95e611e907d95c.jpg',
                'https://i.pinimg.com/736x/a5/59/11/a55911da064809c9ab13fd0471c25ba5.jpg',
                'https://i.pinimg.com/736x/97/2f/db/972fdbc51e47a7bccddf662094762e49.jpg',
                //v1 v3
                'https://i.pinimg.com/736x/26/5e/9d/265e9dd4c9f89c60c88112494c4393a2.jpg',
                'https://i.pinimg.com/736x/cd/66/d4/cd66d480b1d12ec0b2e3122960ec31a0.jpg',
                'https://i.pinimg.com/736x/97/24/87/972487f5af6ae221b70f9fcf46e05fc8.jpg',
                //v5
                'https://i.pinimg.com/736x/71/c5/8c/71c58c14b9b0d458bec785ddaa3abd19.jpg',
                //v7
                'https://i.pinimg.com/736x/4d/e0/71/4de071806d56fe6e6d98ed1792f063e4.jpg',
                'https://i.pinimg.com/736x/f8/f2/14/f8f214463af7ed273d3b57f38d195fd2.jpg',
                //v9
                'https://i.pinimg.com/736x/d4/a5/9a/d4a59ae8c74bff4c49c3d3f088776a1a.jpg',
                'https://i.pinimg.com/736x/77/7d/65/777d6568b18de337334347093ffbe9c3.jpg',
                'https://i.pinimg.com/736x/96/89/9e/96899eea704daa96f0a9d9344f84ee0a.jpg',
                //v11
                'https://i.pinimg.com/736x/f2/4c/d5/f24cd53387b957f04a330e63b6382a6f.jpg',
                'https://i.pinimg.com/736x/03/94/3d/03943d617900deef2ac08ff16a12be23.jpg',
                'https://i.pinimg.com/736x/64/4b/af/644bafd4b02f21effdc18d10fdd5fcef.jpg',
                //
                'https://i.pinimg.com/736x/2d/40/b2/2d40b2a3bedf935068f03555de34aae4.jpg',
                'https://i.pinimg.com/736x/99/a7/38/99a73813c4f6dc801d2fc77da093b958.jpg',
                'https://i.pinimg.com/736x/38/48/97/3848973051c0fff536655a3c280c8f62.jpg'
        ]
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

    const [isWide, setIsWide] = useState(false);

    const handleImageLoad = (event) => {
        const { naturalWidth, naturalHeight } = event.target;
        setIsWide(naturalWidth > naturalHeight);
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
                            
                            <div className={isWide ? 'imagensTrabalho2' : 'imagensTrabalho'}>
                                <img
                                    src={selectedOption.imagens[currentImageIndex]}
                                    alt={`Imagem ${currentImageIndex + 1} de ${selectedOption.nome}`}
                                    className='fotos'
                                    onLoad={handleImageLoad}
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
