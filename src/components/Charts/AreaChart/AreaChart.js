import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Text } from 'recharts';
import Heading from '../../Heading/Heading';
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SimpleAreaChart = ({ singleCountry }) => {
  const formatXAxis = (tickItem) => {
    const month = monthNames[tickItem.slice(6, 7) - 1];
    return `${month} ${tickItem.slice(8, 10)}`;
  };

  return (
    <>
      <Heading>{singleCountry[0].Country}</Heading>
      <ResponsiveContainer width="100%" height={600}>
        <AreaChart data={singleCountry} margin={{ top: 60, right: 80, left: 80, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" tickFormatter={formatXAxis} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} iconType="rect" iconSize={30} />
          <Area type="monotone" dataKey="Confirmed" stroke="#DAA520" fill="#DAA520" />
          <Area type="monotone" dataKey="Recovered" stroke="#32CD32" fill="#32CD32" />
          <Area type="monotone" dataKey="Deaths" stroke="red" fill="red" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
export default SimpleAreaChart;
