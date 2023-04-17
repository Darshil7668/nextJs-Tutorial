import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Mycomp = () => {
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

  let news = ["#8df552", "#6665ff", "#27ef99", "#ff0000d4", "#ffe72d",]

  const keys = Object.keys(data[0]).filter(key => key !== "name" && key !== "fill");

  const bars = keys.map((key, index) => (
    <Bar key={key} dataKey={key} fill={news[index % news.length]} />
  ));




  return (
    <div className='flex justify-center items-center h-98'>
      <ResponsiveContainer width="50%" height={500}>
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {bars}
        </BarChart>
      </ResponsiveContainer>
    </div>

  )
}

export default Mycomp
