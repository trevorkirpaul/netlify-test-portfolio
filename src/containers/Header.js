import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialWrap = styled.div`
  background: #383838;
  color: #f8f8f8;
  display: flex;
  align-items: baseline;
  align-content: center;
  justify-content: space-evenly;
  padding: 5px 10px;
  border-radius: 5px;
`;

const A = styled.a`
  color: #f8f8f8;

  &:hover {
    color: palevioletred;
  }
`;

const I = styled.i`
  /* margin-right: 5px; */
  padding: 5px 10px;
`;

const Logo = styled.span`
  font-size: 25px;
  font-weight: 300;
`;

const Bold = styled.span`
  font-weight: 700;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <SocialWrap>
          <A href="https://www.twitter.com/trevorkirpaul" target="_blank">
            <I className="fab fa-twitter" />
          </A>
          <A href="https://www.github.com/trevorkirpaul" target="_blank">
            <I className="fab fa-github-alt" />
          </A>
        </SocialWrap>
        <Logo>
          trevor
          <Bold>KIRPAUL</Bold>
        </Logo>
      </Wrapper>
    );
  }
}

export default Header;
