
import './Eclipse.css';
import React, { useRef, useState, useEffect, Suspense } from 'react';
//import { Canvas, useFrame } from '@react-three/fiber';
//import { OrbitControls, useGLTF } from '@react-three/drei';

// Função para carregar o modelo 3D do Sol
function Eclipse(/*{ position, setsunTargetPosition }*/) {
  /*const { scene } = useGLTF('./public/sun_model.glb');
  const ref = useRef();
  const speed = 0.09; // Velocidade

  // Animação sol
  useFrame(() => {
    if (ref.current) {
      ref.current.position.lerp({ x: setsunTargetPosition[0], y: setsunTargetPosition[1], z: setsunTargetPosition[2] }, speed);
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <primitive ref={ref} object={scene} scale={[0.5, 0.5, 0.5]} position={position} />
  );
}

// Função para carregar o modelo 3D da Lua
function MoonModel({ position, targetPosition }) {
  const { scene } = useGLTF('./public/nasa_cgi_moon_kit.glb');
  const ref = useRef();
  const speed = 0.09; // Velocidade

  // Animação lua
  useFrame(() => {
    if (ref.current) {
      ref.current.position.lerp({ x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] }, speed);
    }
  });

  return <primitive ref={ref} object={scene} scale={[1.0, 1.0, 1.0]} position={position} />;
}

function Eclipse() {
  const [moonPosition, setMoonPosition] = useState([-3.4, 25, -17]); // Entrada LUA
  const [targetPosition, setTargetPosition] = useState([-3.4, 20, -17]); // Final LUA

  const [sunPosition, setsunPosition] = useState([-200, -800, -1000]); // Entrada SOL
  const [sunTargetPosition, setsunTargetPosition] = useState([-200, -400, -1000]); // Final SOL

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Posição atual do scroll

      // "Trava" apoós o scroll de 700px
      if (scrollY > 850 && !hasScrolled) {
        setHasScrolled(true);
      }

      const maxScroll = document.body.scrollHeight - window.innerHeight; // Máximo de scroll disponível
      const scrollPercentage = scrollY / maxScroll; // Porcentagem de scroll feita

      // Atualiza a posição da lua
      const newTargetX = -3.7 + scrollPercentage;
      const newTargetY = -9;  
      const newTargetZ = -18 + scrollPercentage;
      setTargetPosition([newTargetX, newTargetY, newTargetZ]);
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove o evento de scroll ao desmontar o componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);*/

  return (
    <div className='animacaoEclipse'>
      <img className='lua' src="/lua.png" alt="" />
      <img className='sol' src="/sol.png" alt="" />
      <div className='textoIncial'>
        <h1 className='titulo'>ECLIPSE AUTOMAÇÃO</h1>
        <h2 className='subtitulo'>SOLUÇÕES DE AUTOMAÇÃO INDUSTRIAL</h2>
      </div>
      {/*<Canvas camera={{ position: [0.4, -0.12, 2], fov: 50 }} frameloop={hasScrolled ? "demand" : "always"}>
        <Suspense fallback={null}>
          <ambientLight />
          <SunModel position={sunPosition} setsunTargetPosition={sunTargetPosition} />
          <MoonModel position={moonPosition} targetPosition={targetPosition} />
        </Suspense>
      </Canvas>*/}
    </div>
  );
}

export default Eclipse;
