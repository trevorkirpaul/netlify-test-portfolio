import React from 'react';
import styled from 'styled-components';

const Base = styled.span`
  display: inline-block;
  color: #383838;
`;

const ErrorStyles = styled(Base)`
  color: #d32f2f;
`;

const Text = props => <Base>{props.children}</Base>;

const ErrorText = props => <ErrorStyles>{props.children}</ErrorStyles>;

export { Text as default, ErrorText };
