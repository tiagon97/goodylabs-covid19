import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';

import GlobalStatistics from './components/GlobalStatistics/GlobalStatistics';
import GlobalStyle from './theme/GlobalStyle';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import { Url } from './constants';
import store from './store/store';
import { AreaChart, BarChart, MapChart } from './components/Charts';
import { StyledReactTooltip } from './RootStyled';

const Root = () => {
  const [content, setContent] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [globalData, setGlobalData] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [singleCountry, setSingleCountry] = useState([]);

  const filterCountries = countriesData.filter((countryData) =>
    countryData.Country.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const selectCountry = (e) => {
    setInputValue('');
    const countryName = e.target.innerText.split(' ').join('-');
    axios
      .get(`${Url.country}${countryName}`)
      .then((response) => {
        const newResponse = response.data.slice(Math.max(response.data.length - 30, 1));
        setSingleCountry(newResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <MapChart setTooltipContent={setContent} countriesData={countriesData} />
      <StyledReactTooltip>{content}</StyledReactTooltip>
      <Input value={inputValue} onChange={handleInputChange} name="search" />
      {inputValue.length >= 2 ? (
        <List value={inputValue} filteredCountries={filterCountries} selectCountry={selectCountry} />
      ) : null}
      {singleCountry.length ? <AreaChart singleCountry={singleCountry} /> : <BarChart globalData={globalData} />}
      <GlobalStatistics globalData={globalData} />
      {console.log(globalData)}
    </Provider>
  );
};

export default Root;
