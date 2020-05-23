import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import format from '../../utils';
import messages from './messages';
import { Wrapper, StyledSpan, Tile, Title, Data } from './styled';

const GlobalStatistics = ({ globalData }) => (
  <>
    <Heading>{messages.header}</Heading>
    <Wrapper>
      <Tile>
        <Title>{messages.cases}</Title>
        <Data>
          {globalData.TotalConfirmed ? (
            <StyledSpan color="primary">{format`${globalData.TotalConfirmed}`}</StyledSpan>
          ) : (
            messages.loading
          )}
        </Data>
      </Tile>
      <Tile>
        <Title>{messages.deaths}</Title>
        <Data>
          {globalData.TotalConfirmed ? (
            <StyledSpan color="secondary">{format`${globalData.TotalDeaths}`}</StyledSpan>
          ) : (
            messages.loading
          )}
        </Data>
      </Tile>
      <Tile>
        <Data>
          <Title>{messages.recovered}</Title>
          {globalData.TotalConfirmed ? (
            <StyledSpan>{format`${globalData.TotalRecovered}`}</StyledSpan>
          ) : (
            messages.loading
          )}
        </Data>
      </Tile>
    </Wrapper>
  </>
);

GlobalStatistics.propTypes = {
  globalData: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default GlobalStatistics;
