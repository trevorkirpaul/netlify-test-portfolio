import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const StylesViewWrapper = styled(Styles)`
  margin-top: 75px;
`;

const Wrapper = props => <Styles>{props.children}</Styles>;

const ViewWrapper = props => (
  <StylesViewWrapper>{props.children}</StylesViewWrapper>
);

export { Wrapper as default, ViewWrapper };
