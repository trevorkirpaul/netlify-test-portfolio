import React from 'react';
import styled from 'styled-components';

import LoadingSpinner from 'components/LoadingSpinner';

const StyledButton = styled.button``;

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
