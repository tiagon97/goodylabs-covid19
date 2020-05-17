import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  line-height: 80px;
  background-color: white;
  text-align: center;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
`;

const StyledHeading = styled.h1`
  color: orangered;
`;

const Header = () => (
  <StyledHeader>
    <StyledHeading>COVID-19 Live</StyledHeading>
  </StyledHeader>
);
export default Header;
