import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div``;

const I = styled.i`
  animation: ${rotate} 1s linear infinite;
`;

const LoadingSpinner = () => (
  <Wrapper>
    <I className="fas fa-spinner" />
  </Wrapper>
);

export default LoadingSpinner;
