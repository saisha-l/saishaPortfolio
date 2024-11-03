import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for the flowing gradient background
const animateGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled component for the animated gradient background
const FlowingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(200deg, #ea5753, #f8acff);
  background-size: 400% 400%;
  animation: ${animateGradient} 10s ease infinite;
  overflow: hidden;
  pointer-events: none; // Prevent interaction with other elements
  z-index: -1; 

`;

const DynamicBackground: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <FlowingBackground />
    </>
  );
};

export default DynamicBackground;
