import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import PropTypes from 'prop-types';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MultiLineString = `\n\nTotal cases: 23342 
Total deaths: 823 
Total recovered: 2122`;

const MapChart = ({ setTooltipContent }) => (
  <>
    <ComposableMap height={450} data-tip="" projectionConfig={{ scale: 150 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME } = geo.properties;
                setTooltipContent(`${NAME} ${MultiLineString}`);
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
};

MapChart.defaultProps = {
  setTooltipContent: () => 'no data',
};

export default memo(MapChart);
