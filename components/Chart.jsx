import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Mycomp = () => {
  const [chartData, setChartData] = useState()
  console.log(chartData)
  useEffect(() => {
    const data = [
      {
        name: 'Chintan',
        maths: 95,
        science: 84,
        English: 74,
        Physycs: 98,
        Coding: 78,
      },
      {
        name: 'Jaydeep',
        maths: 93,
        science: 34,
        English: 74,
        Physycs: 88,
        Coding: 18,
      },
      {
        name: 'Dhaval',
        maths: 45,
        science: 54,
        English: 76,
        Physycs: 78,
        Coding: 88,
      },
      {
        name: 'Aakash',
        maths: 93,
        science: 54,
        English: 64,
        Physycs: 48,
        Coding: 79,
      },
    ];
    setChartData(data)
  }, [])

  return (
    <div className='flex justify-center items-center h-98'>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="maths" stroke="#8df552" />
        <Line type="monotone" dataKey="Coding" stroke="#6665ff" />
        <Line type="monotone" dataKey="science" stroke="#27ef99" />
        <Line type="monotone" dataKey="Physycs" stroke="#ff0000d4" />
        <Line type="monotone" dataKey="English" stroke="#ffe72d" />
      </LineChart>
    </div>

  )
}

export default Mycomp

let news = ["#8df552", "#6665ff", "#27ef99", "#ff0000d4", "#ffe72d",]