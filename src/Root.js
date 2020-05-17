import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import axios from 'axios';
import MapChart from './components/MapChart/MapChart';
import GlobalStyle from './theme/GlobalStyle';
import Header from './components/Header/Header';
import GlobalStatistics from './components/GlobalStatistics/GlobalStatistics';

const StyledReactTooltip = styled(ReactTooltip)`
  width: 200px;
  height: 200px;
  border-radius: 1.3rem;
  white-space: pre-wrap;
`;

const Root = () => {
  const [content, setContent] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((res) => {
        setCountryData(res.data.Countries);
        setGlobalData(res.data.Global);
        //console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <GlobalStyle />
      <MapChart setTooltipContent={setContent} />
      <StyledReactTooltip>{content}</StyledReactTooltip>
      <GlobalStatistics globalData={globalData} />
      {console.log(globalData)}
    </div>
  );
};
export default Root;
