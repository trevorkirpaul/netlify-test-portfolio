import React from 'react';
import styled from 'styled-components';

import LoadingSpinner from 'components/LoadingSpinner';

const StyledButton = styled.button`
  background: #383838;
  color: #f8f8f8;
  border: none;
  border-bottom: 2px solid #383838;
  padding: 10px 15px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background: #000;
    border-bottom-color: palevioletred;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const Button = ({ loading, label, onClick, children, disabled }) => (
  <StyledButton
    onClick={loading ? () => {} : onClick}
    disabled={disabled || loading}
  >
    {loading ? (
      <LoadingSpinner />
    ) : (
      <>
        {label}
        {children}
      </>
    )}
  </StyledButton>
);

export default Button;
