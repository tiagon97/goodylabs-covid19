import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import GlobalStatistics from './components/GlobalStatistics';
import GlobalStyle from './theme/GlobalStyle';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import Modal from './components/Modal';
import StyledReactTooltip from './RootStyled';
import { AreaChart, BarChart, MapChart } from './components/Charts';
import { Url } from './constants';

const Root = () => {
  const [content, setContent] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState({
    errorMessage: '',
    value: false,
  });

  const Global = useSelector(({ globalData }) => globalData);
  const Countries = useSelector(({ countriesData }) => countriesData);
  const SingleCountry = useSelector(({ singleCountryData }) => singleCountryData);
  const dispatch = useDispatch();

  const filterCountries = Countries.filter((country) =>
    country.Country.toLowerCase().includes(inputValue.toLowerCase()),
  );

  function getData() {
    return (dispatch) => {
      axios
        .get(Url.summaryUrl)
        .then(({ data }) =>
          dispatch({
            type: 'FETCH_COUNTRIES_DATA',
            payload: data,
          }),
        )
        .catch((err) => {
          console.log(err);
          setError({ errorMessage: err, value: true });
        });
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const selectCountry = (e) => {
    setInputValue('');
    const countryName = e.target.innerText.split(' ').join('-');
    axios
      .get(`${Url.country}${countryName}`)
      .then(({ data }) => {
        const newResponse = data.slice(Math.max(data.length - 30, 1));
        dispatch({
          type: 'FETCH_SINGLE_COUNTRY',
          payload: newResponse,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {console.log(error.errorMessage)}
      {error.value === true ? <Modal error={error.errorMessage} /> : null}
      <GlobalStyle />
      <Header />
      <MapChart setTooltipContent={setContent} countriesData={Countries} />
      <StyledReactTooltip>{content}</StyledReactTooltip>
      <Input value={inputValue} onChange={handleInputChange} name="search" />
      {inputValue.length >= 2 ? (
        <List value={inputValue} filteredCountries={filterCountries} selectCountry={selectCountry} />
      ) : null}
      {SingleCountry.length ? <AreaChart singleCountry={SingleCountry} /> : <BarChart globalData={Global} />}
      <GlobalStatistics globalData={Global} />
    </>
  );
};

export default Root;
