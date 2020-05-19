import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import format from '../../utils';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #eee;
  text-align: center;
  padding: 40px 0;
  font-weight: 600;
  font-size: 2rem;
`;

const handleColorGenre = (color) => {
  switch (color) {
    case 'primary':
      return '#DAA520';
    case 'secondary':
      return 'red';
    default:
      return '#32CD32';
  }
};

const StyledSpan = styled.span`
  color: ${({ color }) => handleColorGenre(color)};
`;

const GlobalStatistics = ({ globalData }) => {
  return (
    <>
      <h2>Global statistics: </h2>
      <Wrapper>
        <p>
          COVID-19 cases:{' '}
          {globalData.TotalConfirmed ? (
            <StyledSpan color="primary">{format`${globalData.TotalConfirmed}`}</StyledSpan>
          ) : (
            'loading...'
          )}
        </p>
        <p>
          Total deaths:{' '}
          {globalData.TotalConfirmed ? (
            <StyledSpan color="secondary">{format`${globalData.TotalDeaths}`}</StyledSpan>
          ) : (
            'loading...'
          )}
        </p>
        <p>
          Total recovered:{' '}
          {globalData.TotalConfirmed ? <StyledSpan>{format`${globalData.TotalRecovered}`}</StyledSpan> : 'loading...'}
        </p>
      </Wrapper>
    </>
  );
};

GlobalStatistics.propTypes = {
  globalData: PropTypes.instanceOf(Object).isRequired,
};

export default GlobalStatistics;
