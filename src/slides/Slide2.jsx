// src/slides/Slide2.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SlideContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #e0e0e0; // A subtle shift in background
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

const contentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

const Slide2 = () => (
  <SlideContainer
    initial="hidden"
    animate="visible"
    variants={contentVariants}
  >
    <MajorText>The Foundation of Ideas</MajorText>
    <MinorText>Building on a bedrock of curiosity</MinorText>
  </SlideContainer>
);

export default Slide2;
