import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

const Button = ({ label, onClick, children, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {label}
    {children}
  </StyledButton>
);

export default Button;
