import React from "react";
import "./App.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

const Array = [
  {
    name: "node",
    student: 13,
    fees: 10,
  },
  {
    name: "javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "Express",
    student: 5,
    fees: 17,
  },
  {
    name: "mongoDB",
    student: 13,
    fees: 11,
  },
  {
    name: "react",
    student: 7,
    fees: 20,
  },
];
function App() {
  return (
    <>
      <h1>1. line chart</h1>
      <ResponsiveContainer width="70%" aspect={3}>
        <LineChart
          data={Array}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <Legend />
          <CartesianGrid strokeDashoffset={(4, 4)} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "bisque",
              border: "1px solid black",
            }}
          />
          <Line
            type="linear"
            dataKey="student"
            stroke="maroon"
            activeDot={{ r: 5 }}
          />
          <Line
            type="linear"
            dataKey="fees"
            stroke="green"
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <h1>2. Bar chart</h1>
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart data={Array} width={400} height={400}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray={(4, 5)} />
          <Legend />
          <Tooltip />
          <Bar dataKey="student" fill="teal" />
        </BarChart>
      </ResponsiveContainer>

      <h1>3. Area Chart</h1>
      <ResponsiveContainer width="50%" aspect={3}>
        <AreaChart width={600} height={400} data={Array}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="student"
            stroke="#8884d8"
            fill="brown"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
