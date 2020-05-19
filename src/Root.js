import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import axios from 'axios';
import MapChart from './components/MapChart/MapChart';
import GlobalStyle from './theme/GlobalStyle';
import Header from './components/Header/Header';
import GlobalStatistics from './components/GlobalStatistics/GlobalStatistics';
import Url from './constants';

const StyledReactTooltip = styled(ReactTooltip)`
  width: 200px;
  height: 100px;
  border-radius: 1.3rem;
  white-space: pre-wrap;
`;

const Root = () => {
  const [content, setContent] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    axios
      .get(Url.summaryUrl)
      .then((response) => {
        setCountriesData(response.data.Countries);
        setGlobalData(response.data.Global);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <GlobalStyle />
      <MapChart setTooltipContent={setContent} countriesData={countriesData} />
      <StyledReactTooltip>{content}</StyledReactTooltip>
      <GlobalStatistics globalData={globalData} />
    </div>
  );
};
export default Root;
