import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import axios from 'axios';
import store from './store/store';
import MapChart from './components/MapChart/MapChart';
import GlobalStyle from './theme/GlobalStyle';
import Header from './components/Header/Header';
import GlobalStatistics from './components/GlobalStatistics/GlobalStatistics';
import Url from './constants';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import List from './components/List/List';

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
  const [inputValue, setInputValue] = useState('');

  const filterCountries = countriesData.filter((countryData) =>
    countryData.Country.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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

  console.log(filterCountries);
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <MapChart setTooltipContent={setContent} countriesData={countriesData} />
        <StyledReactTooltip>{content}</StyledReactTooltip>
        <GlobalStatistics globalData={globalData} />
        <Button>search</Button>
        <Input value={inputValue} onChange={handleInputChange} />
        {inputValue.length >= 2 ? <List filteredCountries={filterCountries} /> : null}
      </Provider>
    </div>
  );
};
export default Root;
