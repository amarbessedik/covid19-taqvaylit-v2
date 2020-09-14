// import React, { useState, useEffect } from "react";
// import { buildChartData2  } from "../../utils";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";


// const StackedAreaChart = ({ location = "all" }) => {
//   const [cases, setCases] = useState(null);
//   const [recovered, setRecovered] = useState(null);
//   const [deaths, setDeaths] = useState(null);
//   const [dimensions, setDimensions] = useState([900, 400]);
  

//   useEffect(()=>{
//    window.matchMedia("(max-width: 500px)").matches
//      ? setDimensions([500, 320])
//      : window.matchMedia("(max-width: 700px)").matches
//      ? setDimensions([550, 330])
//      : window.matchMedia("(max-width: 900px)").matches
//      ? setDimensions([650, 340])
//      : window.matchMedia("(min-width: 901px)").matches ? setDimensions([800, 380]): setDimensions([450, 300]);
//   },[dimensions])

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch(
//         `https://disease.sh/v3/covid-19/historical/${location}?lastdays=180`
//       )
//         .then((response) => {
//           return response.json();
//         })
//         .then((data_json) => {
//           const casesData = data_json.timeline
//             ? buildChartData2(data_json.timeline, "cases")
//             : buildChartData2(data_json, "cases");

//           const recoveredData = data_json.timeline
//             ? buildChartData2(data_json.timeline, "recovered")
//             : buildChartData2(data_json, "recovered");

//           const deathsData = data_json.timeline
//             ? buildChartData2(data_json.timeline, "deaths")
//             : buildChartData2(data_json, "deaths");

//           setCases(casesData);
//           setRecovered(recoveredData);
//           setDeaths(deathsData);
//         });
//     };
//     fetchData();
//   }, [location]);

//   let stackedData = [];
//   let newPoint;

//   if (cases && recovered && deaths) {
//     for (let i = 0; i < cases.length; i++) {
//       newPoint = {
//         date: cases[i].date,
//         deaths: deaths[i].deaths,
//         recovered: recovered[i].recovered,
//         cases: cases[i].cases,
//       };
//       stackedData.push(newPoint);
//     }
//   }

  
//     return (
//       <AreaChart
//         width={dimensions[0]}
//         height={dimensions[1]}
//         data={stackedData}
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Area
//           type="monotone"
//           dataKey="deaths"
//           stackId="1"
//           stroke="#FF420E"
//           fill="#F98866"
//         />
//         <Area
//           type="monotone"
//           dataKey="recovered"
//           stackId="1"
//           stroke="#7DD71D"
//           fill="rgb(61, 235, 191)"
//         />
//         <Area
//           type="monotone"
//           dataKey="cases"
//           stackId="1"
//           stroke="#CC1034"
//           fill="rgba(3, 22, 197, 0.5)"
//         />
//       </AreaChart>
//     );
// };

// export default StackedAreaChart;
