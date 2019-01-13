import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  margin-bottom: 15px;
  padding: 10px 15px;
`;

const Field = ({ type = 'text', name, value, onChange, placeholder }) => (
  <StyledInput
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Field;
