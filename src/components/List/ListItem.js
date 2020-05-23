import React from 'react';

import { StyledItem } from './styled';

const ListItem = ({ children, selectCountry }) => <StyledItem onClick={selectCountry}>{children}</StyledItem>;

export default ListItem;
