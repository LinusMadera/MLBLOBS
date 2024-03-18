// src/slides/Slide1.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GradientBackground from '../GradientBackground';

const SlideContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const MajorText = styled(motion.h1)`
  font-size: 48px;
  font-family: 'YourCustomFont', sans-serif;
`;

const MinorText = styled(motion.h2)`
  font-size: 24px;
  margin-top: 20px;
  font-family: 'YourCustomFont', sans-serif;
`;

const slideVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const Slide1 = () => (
  <>
  <SlideContainer
    initial="hidden"
    animate="visible"
    variants={slideVariants}
  >
    <MajorText>Introducing Our Journey</MajorText>
    <MinorText>A quest through innovation and discovery</MinorText>
  </SlideContainer>
<GradientBackground/>
</>
);

export default Slide1;
