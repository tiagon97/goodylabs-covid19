import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import PropTypes from 'prop-types';
import Url from '../../../constants';

const MapChart = ({ setTooltipContent, countriesData }) => (
  <>
    <ComposableMap height={420} data-tip="" projectionConfig={{ scale: 150 }}>
      <Geographies geography={Url.geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, ISO_A2 } = geo.properties;
                const result = countriesData.filter((country) => country.CountryCode === ISO_A2);
                if (!result.length) {
                  setTooltipContent(`${NAME}\nno data available`);
                } else {
                  const MultiLineString = `Total cases: ${result[0].TotalConfirmed}\nTotal deaths: ${result[0].TotalDeaths}\nTotal recovered: ${result[0].TotalRecovered}`;
                  setTooltipContent(`${NAME}\n${MultiLineString} `);
                }
              }}
              onMouseLeave={() => {
                setTooltipContent('');
              }}
              style={{
                default: {
                  fill: '#D6D6DA',
                  outline: 'none',
                },
                hover: {
                  fill: '#F53',
                  outline: 'none',
                },
                pressed: {
                  fill: '#E42',
                  outline: 'none',
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </>
);
MapChart.propTypes = {
  setTooltipContent: PropTypes.func,
  countriesData: PropTypes.instanceOf(Array).isRequired,
};

MapChart.defaultProps = {
  setTooltipContent: () => 'no data',
};

export default memo(MapChart);
