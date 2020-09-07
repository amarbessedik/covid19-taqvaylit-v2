import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { buildChartData, options, casesTypeColors } from "../utils";
// import styles from "./LineGraph.module.css";
//buildChartDatasets

function LineGraph({ 
  height = 320,
  width = 360,
  location = "all",
  casesType,
}) {
  const [data, setData] = useState({});

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
          // console.log('LineGraph >>> chartData:', chartData);
          // console.log('LineGraph >>> data: ', data);
        });
    };
    fetchData();
  }, [casesType, location]);

  const _datasets = [
    {
      data: data,
      backgroundColor: `${casesTypeColors[casesType].fill}`,
      borderColor: `${casesTypeColors[casesType].border}`,
    },
  ];

  return (
    <div id='graphh'>
      {data?.length > 0 && (
        <Line
          width={width}
          height={height}
          options={options}
          data={{
            datasets: _datasets,
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
