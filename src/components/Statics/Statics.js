import React from 'react';
import './Statics.css'
import Footer from '../../layouts/Footer/Footer';
import {  PieChart, Pie, Sector, Cell , BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PolarAngleAxis, PolarRadiusAxis, PolarGrid } from 'recharts';

// First chart code
const totaldata = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


//  Second chart code
const data = [
    {Topic: 'React', TotalQuizes: 8, },
    {Topic: 'JavaScript', TotalQuizes: 9,},
    {Topic: 'CSS', TotalQuizes: 8, },
    {Topic: 'Git', TotalQuizes: 11,},
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  

const Statics = () => {
    return (
        <div className='statics'>
            <h1>Total Topics vs Total Quizes chart</h1>
            <PieChart width={800} height={800}>
                <PolarAngleAxis></PolarAngleAxis>
                <PolarRadiusAxis></PolarRadiusAxis>
                <Tooltip></Tooltip>
                <PolarGrid></PolarGrid>
              
                <Pie
                    name='name'
                    data={totaldata}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>



            <h1>Topic vs Quizes chart</h1>
            <BarChart width={1200} height={500} data={data}   margin={{left: 150, top: 50, }} >
                <XAxis dataKey="Topic"></XAxis>
                <YAxis></YAxis>
                <Tooltip ></Tooltip>
                <CartesianGrid  strokeDasharray="3 3"></CartesianGrid>
                <Bar
                 type="monotone" dataKey="TotalQuizes" stroke="#010203" strokeWidth={2} fill='#0088FE' shape={<TriangleBar></TriangleBar>}
                 label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                 </Bar>
            </BarChart>
            <br></br>
            <br></br>
            <br></br>
        <Footer></Footer>
        </div>
    );
};

export default Statics;