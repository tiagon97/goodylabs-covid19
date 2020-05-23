import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Heading from '../../Heading/Heading';

const SimpleBarChart = ({ globalData }) => {
  const data = [
    { name: 'Total confirmed', amount: `${globalData.TotalConfirmed}`, color: '#DAA520' },
    { name: 'Total deaths', amount: `${globalData.TotalDeaths}`, color: 'red' },
    { name: 'Total recovered', amount: `${globalData.TotalRecovered}`, color: '#32CD32' },
  ];

  return (
    <>
      <Heading>Global stats</Heading>
      <ResponsiveContainer width="100%" height={600}>
        <BarChart data={data} margin={{ top: 60, right: 80, left: 80, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fill: 'none' }} />
          <Bar barSize={250} dataKey="amount" fill="violet">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={data[index].color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default SimpleBarChart;
