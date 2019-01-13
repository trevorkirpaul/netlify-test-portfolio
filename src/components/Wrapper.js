import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const Wrapper = props => <Styles>{props.children}</Styles>;

export default Wrapper;
