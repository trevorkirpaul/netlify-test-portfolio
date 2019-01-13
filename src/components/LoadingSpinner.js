import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const I = styled.i``;

const LoadingSpinner = () => (
  <Wrapper>
    <I className="fas fa-spinner" />
  </Wrapper>
);

export default LoadingSpinner;
