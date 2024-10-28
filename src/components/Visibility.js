import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', views: 1000 },
  { name: 'Feb', views: 1200 },
  { name: 'Mar', views: 800 },
  { name: 'Apr', views: 1600 },
  { name: 'May', views: 1700 },
  { name: 'Jun', views: 1400 },
  { name: 'Jul', views: 900 },
];

const Visibility = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="views" stroke="#3ECF8E" />
    </LineChart>
  </ResponsiveContainer>
);

export default Visibility;
