import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const List = ({ filteredCountries }) => (
  <StyledWrapper>
    {filteredCountries.map((item) => {
      return <ListItem key={item.CountryCode}>{item.Country}</ListItem>;
    })}
  </StyledWrapper>
);

export default List;
