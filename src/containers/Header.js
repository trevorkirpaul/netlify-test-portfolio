import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    /* flex-direction: column-reverse; */
  }
`;

const SocialWrap = styled.div`
  /* background: #383838; */
  color: #383838;
  display: flex;
  align-items: baseline;
  align-content: center;
  justify-content: space-evenly;
  padding: 5px 10px;
  border-radius: 5px;
`;

const A = styled.a`
  color: #383838;
  font-size: 24px;
  margin-right: 25px;
  &:hover {
    color: palevioletred;
  }

  @media (max-width: 600px) {
    margin-right: 0;

    &:hover {
      color: #383838;
    }
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
