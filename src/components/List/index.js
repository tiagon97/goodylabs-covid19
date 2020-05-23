import React from 'react';

import ListItem from './ListItem';
import { StyledWrapper } from './styled';

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
