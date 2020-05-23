import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const List = ({ filteredCountries, selectCountry }) => (
  <StyledWrapper>
    {filteredCountries.map((item) => {
      return (
        <ListItem selectCountry={selectCountry} key={item.CountryCode}>
          {item.Country}
        </ListItem>
      );
    })}
  </StyledWrapper>
);

export default List;
