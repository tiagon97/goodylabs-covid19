import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
  padding: 20px;
  margin: 1px;
  border: solid #ddd 2px;
  flex-basis: calc(25% - 2px);
  transition: 0.3s;
  border-radius: 5px;

  :hover {
    background-color: #ddd;
    color: white;
  }
`;

const ListItem = ({ children }) => <StyledItem>{children}</StyledItem>;
export default ListItem;
