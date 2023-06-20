import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2010 Population", "2000 Population"],
  ["Peshawar City, PE", 8175000, 8008000],
  ["Islamabad, ICT", 3792000, 3694000],
  ["Lahore, LH", 2695000, 2896000],
  ["Karachi, KI", 2099000, 1953000],
  ["Quetta, QTA", 1526000, 1517000],
];

export const options = {
  title: "Population of Largest PAK Cities",
  chartArea: { width: "50%" },
  
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  colors:["rgb(53,138,148)", "rgb(40, 34, 70)"],
  
};

export default function HbarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="90%"
      height="270px"
      data={data}
      options={options}
    />
  );
}
