import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Application } from "https://cdn.skypack.dev/@splinetool/runtime@0.9.416";
import Spline from '@splinetool/react-spline';
import TextTransition, { presets } from 'react-text-transition';
import { FaLightbulb, FaChartLine, FaTrophy, FaUserFriends, FaBrain, FaGamepad, FaCode, FaChalkboardTeacher, FaHandshake, FaBalanceScale } from 'react-icons/fa';

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 overflow: hidden;
 scroll-behavior: smooth;
 scroll-snap-type: y mandatory;
 position: relative;
`;

const SplineContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: -1;
`;

const Slide = styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 position: relative;
 scroll-snap-align: start;
 animation: ${keyframes`
   0% {
     transform: translateY(0);
   }
   50% {
     transform: translateY(-10px);
   }
   100% {
     transform: translateY(0);
   }
 `} 4s infinite ease-in-out;
`;

const fadeAnimation = keyframes`
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
`;

const TextAnimation = keyframes`
 0% {
   transform: translateX(-100vw);
 }
 100% {
   transform: translateX(0);
 }
`;

const TextAnimationReverse = keyframes`
 0% {
   transform: translateX(100vw);
 }
 100% {
   transform: translateX(0);
 }
`;

const GlowingText = styled.h1`
 font-family: 'Outfit', sans-serif;
 font-size: 20rem;
 font-weight: 900;
 text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
 color: #fff;
 position: fixed;
 animation: ${fadeAnimation} 2s ease-in-out;
`;

const Text = styled.div`
 font-family: 'Outfit', sans-serif;
 font-size: 6rem;
 text-align: left;
 color: #fff;
 animation: ${({ isForward }) =>
   isForward ? css`${TextAnimation} 2s ease-in-out` : css`${TextAnimationReverse} 2s ease-in-out`};
 max-width: 40vw;
 outline: 2px solid rgba(255, 255, 255, 0.5);
 padding: 1rem 2rem;
 border-radius: 1rem;
 backdrop-filter: blur(10px);
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const TextContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
 position: relative;
`;

const Icon = styled.div`
 font-size: 4rem;
 color: #fff;
 position: absolute;
 left: -5rem;
 top: 50%;
 transform: translateY(-50%);

 &:last-child {
   left: auto;
   right: -5rem;
 }
`;

const SurroundSphere = styled.div`
 position: absolute;
 font-size: 10rem;
 color: rgba(255, 255, 255, 0.5);
 animation: ${fadeAnimation} 2s ease-in-out;
`;

const App = () => {
 const containerRef = useRef(null);
 const [currentSlide, setCurrentSlide] = useState(0);
 const scene = useRef(null);

 function onLoad(spline) {
   const obj = spline.findObjectById('66054847-e81e-4e95-b032-f2caf03132a7');
   scene.current = obj;
 }

 useEffect(() => {
   const handleKeyDown = (e) => {
     if (e.key === 'ArrowDown') {
       e.preventDefault();
       const nextSlide = currentSlide + 1;
       if (nextSlide < slides.length) {
         containerRef.current.scrollTo({
           top: nextSlide * containerRef.current.offsetHeight,
           behavior: 'smooth',
         });
         setCurrentSlide(nextSlide);
         rotateScene(true);
       }
     } else if (e.key === 'ArrowUp') {
       e.preventDefault();
       const prevSlide = currentSlide - 1;
       if (prevSlide >= 0) {
         containerRef.current.scrollTo({
           top: prevSlide * containerRef.current.offsetHeight,
           behavior: 'smooth',
         });
         setCurrentSlide(prevSlide);
         rotateScene(false);
       }
     }
   };

   window.addEventListener('keydown', handleKeyDown);
   return () => window.removeEventListener('keydown', handleKeyDown);
 }, [currentSlide]);

 const rotateScene = (isForward) => {
   const rotateAnimation = () => {
     let currentRotation = scene.current.rotation.y;
     let targetRotation = isForward ? currentRotation + Math.PI : currentRotation - Math.PI;

     if (targetRotation > Math.PI * 2) {
       targetRotation = 0;
     } else if (targetRotation < 0) {
       targetRotation = Math.PI * 2;
     }

     const rotationStep = (targetRotation - currentRotation) / 60;

     const animate = () => {
       if (Math.abs(scene.current.rotation.y - targetRotation) > 0.01) {
         scene.current.rotation.y += rotationStep;
         requestAnimationFrame(animate);
       }
     };

     animate();
   };

   rotateAnimation();
 };

 const slides = [
   {
     title: 'ML BLOBS',
     text: (
       <TextContainer>
         <p>Linus / <em>Theodoro </em> / <em>Luana </em> / <em>Gabriel Dias</em> / <em>Kaiki</em></p>
       </TextContainer>
     ),
     icon: <FaBrain />,
   },
   {
     title: 'Ideia do Projeto',
     text: (
       <TextContainer>
         <p>Arenas onde você cria <em>cérebros</em> para competir. <br />
           Assista, planeje, <em>melhore</em> e <em>vença</em>.
         </p>
       </TextContainer>
     ),
     icon: <FaGamepad />,
   },
   {
     title: 'Mercado de Jogos',
     text: (
       <TextContainer>
         <p>Dois mercados em <em>constante crescimento</em>.<br />
           Jogadores buscam <em>mais jogos</em>.<br />
           A área de AI busca <em>mais programadores</em>.<br />
         </p>
       </TextContainer>
     ),
     icon: <FaCode />,
   },
   {
     title: 'Análise SWOT',
     text: (
       <TextContainer>
         <p><em>Oportunidades</em> // <em>Ameaças</em><br /> <em>Forças</em> // <em>Fraquezas</em>.</p>
       </TextContainer>
     ),
     icon: <FaBalanceScale />,
   },
   {
     title: 'Oportunidades e Ameaças',
     text: (
       <TextContainer>
         <p>
           <em>Oportunidades</em>:<br />
           - Falta de concorrência<br />
           - Parcerias educacionais<br />
           <br />
           <em>Ameaças</em>:<br />
           - Complexidade para engajamento<br />
           - Empresas maiores com personagens famosos
         </p>
       </TextContainer>
     ),
     icon: <FaChalkboardTeacher />,
   },
   {
     title: 'Forças e Fraquezas',
     text: (
       <TextContainer>
         <p>
           <em>Forças</em>:<br />
           - Inovação na gameplay<br />
           - Tempo curto de interação<br />
           <br />
           <em>Fraquezas</em>:<br />
           - Conteúdo novo deve ser constante<br />
           - Alto custo computacional
         </p>
       </TextContainer>
     ),
     icon: <FaTrophy />,
   },
   {
     title: 'Público-Alvo',
     text: (
       <TextContainer>
         <p><em>Gamers</em> de todas as idades.<br /><em>Programadores</em> e estudantes.<br /><em>Crianças</em> e adolescentes.</p>
       </TextContainer>
     ),
     icon: <FaUserFriends />,
   },
   {
     title: 'Nossa Equipe',
     text: (
       <TextContainer>
         <p>Linus: jogos<br />e IA.<br /><em>Theodoro</em>: backend<br /><em>Luana</em>: frontend<br /><em>Gabriel</em>: design UX<br /><em>Kaiki</em>: frontend e gerenciamento</p>
       </TextContainer>
     ),
     icon: <FaHandshake />,
   },
   {
     title: 'Fim',
     text: (
       <TextContainer>
         <p><em>Obrigado</em> por assistir :)</p>
       </TextContainer>
     ),
     icon: <FaLightbulb />,
   },
 ];

 const getTitlePosition = (index) => {
   switch (index % 4) {
     case 0:
       return { top: '5vh', left: '5vw' };
     case 1:
       return { top: '5vh', right: '5vw' };
     case 2:
       return { bottom: '5vh', right: '5vw' };
     case 3:
       return { bottom: '5vh', left: '5vw' };
     default:
       return { top: '5vh', left: '5vw' };
   }
 };

 const getTextPosition = (index) => {
   switch (index % 4) {
     case 0:
       return { bottom: '5vh', right: '5vw' };
     case 1:
       return { bottom: '5vh', left: '5vw' };
     case 2:
       return { top: '5vh', left: '5vw' };
     case 3:
       return { top: '5vh', right: '5vw' };
     default:
       return { bottom: '5vh', right: '5vw' };
   }
 };

 return (
   <Container ref={containerRef}>
     <SplineContainer>
       <Spline scene="https://prod.spline.design/sC2SHHuo9nTQSx6y/scene.splinecode" onLoad={onLoad} />
     </SplineContainer>
     <GlowingText style={getTitlePosition(currentSlide)}>
       <TextTransition springConfig={presets.wobbly}>
         {slides[currentSlide].title}
       </TextTransition>
     </GlowingText>
     <SurroundSphere style={getTextPosition(currentSlide)}>
       {slides[currentSlide].icon}
     </SurroundSphere>
     <Slide>
       <TextTransition springConfig={presets.wobbly} inline>
         <Text isForward={true}>{slides[currentSlide].text}</Text>
       </TextTransition>
     </Slide>
   </Container>
 );
};

export default App;