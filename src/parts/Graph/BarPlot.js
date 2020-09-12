import React, { useState, useEffect } from "react";
import { buildChartData } from "../../utils";
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';


const BarPlot = ({location='all', casesType='cases'}) =>{
  const [data, setData] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://disease.sh/v3/covid-19/historical/${location}?lastdays=180`
      )
        .then((response) => {
          return response.json();
        })
        .then((data_json) => {
          const chartData = data_json.timeline
            ? buildChartData(data_json.timeline, casesType)
            : buildChartData(data_json, casesType);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType, location]);


 return (
   <ComposedChart
     width={700}
     height={400}
     data={data}
     margin={{
       top: 20,
       right: 20,
       bottom: 20,
       left: 20,
     }}
   >
     <CartesianGrid stroke="#f5f5f5" />
     <XAxis dataKey="x" />
     <YAxis />
     <Tooltip />
     <Legend />
     <Bar dataKey="y" barSize={20} fill="rgba(66, 133, 244, .2)" />
     <Line type="monotone" dataKey="y" stroke="red" />
   </ComposedChart>
   // fill: rgb(66, 133, 244);
   //   stroke: rgb(66, 133, 244);
 );
}

export default BarPlot;

