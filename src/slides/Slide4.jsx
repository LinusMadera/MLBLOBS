// src/slides/Slide4.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SlideContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #c0c0c0; // A further step into the thematic depth
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

const shiftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.1 } },
};

const Slide4 = () => (
  <SlideContainer
    initial="hidden"
    animate="visible"
    variants={shiftVariants}
  >
    <MajorText>Navigating Challenges</MajorText>
    <MinorText>Moving through obstacles with grace and determination</MinorText>
  </SlideContainer>
);

export default Slide4;
