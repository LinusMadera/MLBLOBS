// src/slides/Slide3.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SlideContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #d0d0d0; // Gradually darkening the background to symbolize depth
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

const expandVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.3 } },
};

const Slide3 = () => (
  <SlideContainer
    initial="hidden"
    animate="visible"
    variants={expandVariants}
  >
    <MajorText>Exploring New Horizons</MajorText>
    <MinorText>Expanding our understanding and boundaries</MinorText>
  </SlideContainer>
);

export default Slide3;
