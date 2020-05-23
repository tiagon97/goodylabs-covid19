import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading/Heading';

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

const Header = () => (
  <StyledHeader>
    <Heading main>COVID-19 Info</Heading>
  </StyledHeader>
);
export default Header;
