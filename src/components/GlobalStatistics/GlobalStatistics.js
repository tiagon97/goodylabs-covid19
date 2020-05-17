import React from 'react';
import styled from 'styled-components';
import format from './../../utils';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #eee;
  text-align: center;
  padding: 40px 0;
  font-weight: 600;
  font-size: 2rem;
`;

const GlobalStatistics = ({ globalData }) => {
  return (
    <>
      <h2>Global statistics: </h2>
      <Wrapper>
        <p>
          COVID-19 cases: <span>{format`${globalData.TotalConfirmed}`}</span>
        </p>
        <p>
          Total deaths: <span>{format`${globalData.TotalDeaths}`}</span>
        </p>
        <p>
          Total recovered: <span>{format`${globalData.TotalRecovered}`}</span>
        </p>
      </Wrapper>
    </>
  );
};

export default GlobalStatistics;
