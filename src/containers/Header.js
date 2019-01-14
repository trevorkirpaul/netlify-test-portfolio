import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 15px;
  /* margin: 15px; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 100%;
  background: #f8f8f8;
  top: 0;
  left: 0;

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

const StyledLink = styled(Link)`
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

const StyledLinkWithoutDecoration = styled(StyledLink)`
  text-decoration: none;
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
          <StyledLink to="/send-email">
            <I className="fas fa-at" />
          </StyledLink>
        </SocialWrap>
        <StyledLinkWithoutDecoration to="/">
          <Logo>
            trevor
            <Bold>KIRPAUL</Bold>
          </Logo>
        </StyledLinkWithoutDecoration>
      </Wrapper>
    );
  }
}

export default Header;
