
import { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import { getDonation } from '../../utilities/localstorage';

export default function Statistics() {
  const [data, setData] = useState([
    { name: 'Total Donation', value: 12 },
    { name: 'Your Donation', value: 0 }
  ])

  useEffect(() => {
    const donationID = getDonation()
    if (data[1].value != donationID.length) {
      const newData = [...data]
      newData[0].value = newData[0].value - donationID.length;
      newData[1].value = donationID.length;
      setData(newData)
    }
  }, [])
  
const COLORS = ['#FF444A', '#00C49F'];
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  
  return (
    <>
    <div className='flex justify-center items-center'>
        <PieChart width={400} height={400}>
          <Tooltip />
          <Pie data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
            </Pie>
      </PieChart>
      
      </div>
       <div className='text-center md:flex justify-center gap-10'>
        <p>Your Donation <span className='donation-color'></span></p>
        <p>Total Donation <span className='total-donation-color'></span></p>
      </div>
  </>
  )
}
