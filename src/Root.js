import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import MapChart from './components/MapChart';
import GlobalStyle from './theme/GlobalStyle';

const StyledReactTooltip = styled(ReactTooltip)`
  width: 400px;
  height: 400px;
`;

const Root = () => {
  const [content, setContent] = useState('');
  return (
    <div>
      <GlobalStyle />
      <MapChart setTooltipContent={setContent} />
      <StyledReactTooltip>{content}</StyledReactTooltip>
    </div>
  );
};
export default Root;
